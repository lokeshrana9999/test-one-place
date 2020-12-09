import React, { Component } from "react";
import Loadable from "react-loadable";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from "./styles/themes";

const AsyncProfile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "profileDefault" */ "./components/profile"),
  loading: () => <div>loading page...</div>,
  modules: ["profileDefault"],
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
        <ThemeChanger
            onChangeTheme={this.handleThemeChange}
            themes={Object.keys(themes)}
          />
          <div>
            <Switch>
              <Route path="/" exact component={AsyncProfile} />
              {/* <Route path="/another" component={AsyncPageAnother} /> */}
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
