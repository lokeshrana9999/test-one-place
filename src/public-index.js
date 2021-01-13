import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.less";
import App from "./App";
import configureStore from "./store/configureStore";
import { UsernameContext } from "./api";

// import registerServiceWorker from './registerServiceWorker';

const { store, persistor } = configureStore(window.__REDUX_STATE__ || {});

const currentEnv = process.env.NODE_ENV;

var globalUsername = "";

if (currentEnv === "development") {
  globalUsername = "lokeshrana9999";
} else if (currentEnv === "production") {
  if (window && window.location) {
    var full = window.location.host;
    //window.location.host is subdomain.domain.com
    var parts = full.split(".");
    globalUsername = parts[0];
  }
}

const AppBundle = (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <UsernameContext.Provider value={globalUsername}>
          <App appType="public" />
        </UsernameContext.Provider>
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  });
};

// registerServiceWorker();
