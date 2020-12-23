import React, { Component } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from "./styles/themes";


const AsyncProfile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "profileDefault" */ "./components/profile/ProfileView"),
  loading: () => <div>loading page...</div>,
  modules: ["profileDefault"],
});

const AsyncLogin = Loadable({
  loader: () =>
    import(/* webpackChunkName: "loginDefault" */ "./components/auth/LoginView"),
  loading: () => <div>loading page...</div>,
  modules: ["loginDefault"],
});

const AsyncProfileEdit = Loadable({
  loader: () =>
    import(/* webpackChunkName: "profileEditDefault" */ "./components/profile/ProfileEditView"),
  loading: () => <div>loading page...</div>,
  modules: ["profileEditDefault"],
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

          <div>
            <Switch>
              <Route path="/profile" exact component={AsyncProfile} />,
              <Route path="/login" exact component={AsyncLogin} />
              <Route path="/profile/edit" exact component={AsyncProfileEdit} />
              {/* <Route path="/another" component={AsyncPageAnother} /> */}
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
