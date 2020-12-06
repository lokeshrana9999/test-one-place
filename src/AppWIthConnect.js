import React, { Component } from "react";

import { connect } from "react-redux";

import { setMessage } from "./store/appReducer";
import App from "./App";

class AppWithConnect extends Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.updateMessage("Who");
    }
  }

  render() {
    console.log("AppCOnt", this.props);
    return <App {...this.props} />;
  }
}

export default connect(
  ({ app }) => ({
    message: app.message,
  }),
  (dispatch) => ({
    updateMessage: (messageText) => dispatch(setMessage(messageText)),
  })
)(AppWithConnect);
