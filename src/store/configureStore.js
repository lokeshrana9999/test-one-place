import { applyMiddleware, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import {appReducer} from "./appReducer";
//import { loadState, saveState } from "../utils";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import the reducer and create a store
//import { reducer } from './todoListRedux'

function configureStore(initialState) {
  /*let createStoreWithMiddleware;

  const middleware = process.env.__DEV__
    ? applyMiddleware(thunk, createLogger())
    : applyMiddleware(thunk);

  createStoreWithMiddleware = compose(
    middleware,
  );*/

  const config = {
    key: 'app',
    storage,
  }

  //const reducer = persistReducer(config,
  //  appReducer
  //);

  const reducer = persistCombineReducers(config, {app: appReducer});

  //const store = createStoreWithMiddleware(createStore)(reducer, initialState);
  const store = createStore(reducer, initialState);
  
  console.log('configstore', store.getState())
  // Enable persistence
  let persistor = persistStore(store, null, () => {
    store.getState() // if you want to get restoredState
  });

  /*if (module.hot) {
    module.hot
      .accept('../reducer', () => {
        const nextRootReducer = require('../reducer/index');
        store.replaceReducer(nextRootReducer);
      });
  }*/


  store.subscribe(() => {
    //saveState(store.getState().albums)
  });

  return { store, persistor };

}

// Add the autoRehydrate middleware to your redux store
// const store = createStore(appReducer);


export default configureStore