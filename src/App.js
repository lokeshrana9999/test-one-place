import React, { Component } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from "./styles/themes";
import { ApiContext } from "./api";

const AsyncProfile = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileDefault" */ "./components/profile/ProfileView"
    ),
  loading: () => <div>loading page...</div>,
  modules: ["profileDefault"],
});

const AsyncLogin = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "loginDefault" */ "./components/auth/LoginView"
    ),
  loading: () => <div>loading page...</div>,
  modules: ["loginDefault"],
});

const AsyncProfileEdit = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "profileEditDefault" */ "./components/profile/ProfileEditView"
    ),
  loading: () => <div>loading page...</div>,
  modules: ["profileEditDefault"],
});

// const AsyncAddCard = Loadable({
//   loader: () =>
//     import(
//       /* webpackChunkName: "profileEditDefault" */ "./components/profile/AddCardView"
//     ),
//   loading: () => <div>loading page...</div>,
//   modules: ["profileEditDefault"],
// });

class App extends Component {
  state = {
    theme: themes.normal,
  };

  handleThemeChange = (themeName) => {
    this.setState({ theme: themes[themeName] });
  };

  render() {
    console.log(
      "app.js",
      process.env.NODE_ENV,
      process.env.REACT_APP_DEV_API_URL,
      process.env.REACT_APP_PROD_API_URL
    );
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
                {/* <Route
                  path="/profile/card/add"
                  exact
                  component={AsyncProfileEdit}
                /> */}
                {/* <Route path="/another" component={AsyncPageAnother} /> */}
              </Switch>
            </div>
          </ApiContext.Provider>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
