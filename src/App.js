import React, { useState } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RestfulProvider, useMutate } from "restful-react";
import { connect } from "react-redux";

// import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from "./styles/themes";
import { ApiContext, AuthApiUrls } from "./api";
import { PageLoader } from "./components/look/mobile";
import { setAccessTokene, setRefreshTokene } from "./store/appReducer";

const AsyncProfile = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileDefault" */ "./components/profile/containers/Profile"
    ),
  loading: () => <PageLoader />,
  modules: ["profileDefault"],
});

const AsyncLogin = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "loginDefault" */ "./components/auth/LoginView"
    ),
  loading: () => <PageLoader />,
  modules: ["loginDefault"],
});

const AsyncProfileEdit = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileEditDefault" */ "./components/profile/containers/ProfileEdit"
    ),
  loading: () => <PageLoader />,
  modules: ["profileEditDefault"],
});

const AsyncChooseBlockCategory = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileEditDefault" */ "./components/block/ChooseBlockCategory"
    ),
  loading: () => <PageLoader />,
  modules: ["chooseBlockCategoryDefault"],
});

const AsyncAddBlock = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileEditDefault" */ "./components/block/AddBlock"
    ),
  loading: () => <PageLoader />,
  modules: ["addBlockEditDefault"],
});

const apiUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;

const App = (props) => {
  const [theme, handleThemeChange] = useState(themes.normal);
  const { accessToken, refreshToken, setAccessTokene, history } = props;
  const { mutate: refreshAccessToken, loading } = useMutate({
    verb: "POST",
    path: apiUrl + AuthApiUrls.refreshAccessToken,
  });
  console.log("app", props);
  const restFulErrorHandler = async (error, retry) => {
    console.log("restFulErrorHandler", retry);
    if (error && (error.status > 400 || error.status < 500)) {
      try {
        const refreshAccessTokenData = await refreshAccessToken({
          refreshToken,
        });
        await setAccessTokene(
          refreshAccessTokenData && refreshAccessTokenData.accessToken
        );
        // console.log('retryRefresh', await retry());
      } catch (e) {
        console.log("refreshError", e);
        if (e.status === 400) {
          history.push(`/login?redirectBack=${history.location.pathname}`);
        }
      }
    }
  };

  return (
    <RestfulProvider
      base={apiUrl}
      resolve={(data) => console.log("restfulprovider", data)}
      // requestOptions={(url, method, requestBody) => ({
      //   headers: { Authorization: `Bearer ${accessToken}` },
      // })}

      onError={restFulErrorHandler}
    >
      <ThemeProvider theme={theme}>
        <div>
          <ApiContext.Provider
            value={
              process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_DEV_API_URL
                : process.env.REACT_APP_PROD_API_URL
            }
          >
            <div>
              <Switch>
                <Route path="/" exact component={AsyncProfile} />,
                <Route path="/login" exact component={AsyncLogin} />
                <Route
                  path="/profile/edit"
                  exact
                  component={AsyncProfileEdit}
                />
                <Route
                  path="/block/choose-category"
                  exact
                  component={AsyncChooseBlockCategory}
                />
                <Route
                  path="/block/add/:blockCategoryId"
                  exact
                  component={AsyncAddBlock}
                />
              </Switch>
            </div>
          </ApiContext.Provider>
        </div>
      </ThemeProvider>
    </RestfulProvider>
  );
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
  console.log("mapstatetoprops", state);
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
