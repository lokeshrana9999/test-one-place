import React, { Component } from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Switch, NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";

import { setMessage } from "./store/appReducer";

// import logo from './logo.svg';
// import Profile from './components/profile';
// import "./App.css";


const AsyncProfile = Loadable({
  loader: () => import(/* webpackChunkName: "profileDefault" */ "./components/profile"),
  loading: () => <div>loading page...</div>,
  modules: ["profileDefault"],
});

// const AsyncPageAnother = Loadable({
//   loader: () => import(/* webpackChunkName: "pageAnother" */ "./PageAnother"),
//   loading: () => <div>loading another page...</div>,
//   modules: ["pageAnother"],
// });

class App extends Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    return (
      <div >
        <div>
          <Switch>
            <Route path="/" exact component={AsyncProfile} />
            {/* <Route path="/another" component={AsyncPageAnother} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({
      message: app.message,
    }),
    (dispatch) => ({
      updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
  )(App)
);
