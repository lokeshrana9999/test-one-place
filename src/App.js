import React, { Component } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from "./styles/themes";
import { ApiContext } from "./api";
import { PageLoader } from "./components/look/mobile";

const AsyncProfile = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileDefault" */ "./components/profile/ProfileView"
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
      /* webpackChunkName: "profileEditDefault" */ "./components/profile/ProfileEditView"
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

class App extends Component {
  state = {
    theme: themes.normal,
  };

  handleThemeChange = (themeName) => {
    this.setState({ theme: themes[themeName] });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
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
                <Route path="/profile" exact component={AsyncProfile} />,
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
                <Route path="/block/add/:blockCategoryId" exact component={AsyncAddBlock} />
              </Switch>
            </div>
          </ApiContext.Provider>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
