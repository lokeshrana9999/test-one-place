import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.less";
import App from "./App";
import configureStore from "./store/configureStore";
// import registerServiceWorker from './registerServiceWorker';
const { store, persistor } = configureStore(window.__REDUX_STATE__ || {});

console.log(persistor);

const AppBundle = (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App appType='private' />
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
