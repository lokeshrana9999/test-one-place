export const initialState = {
  accessToken: "null",
  refreshToken: "null",
  googleAccesssToken: "null",
  googleTokenId: "null",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case "SET_REFRESH_TOKEN":
      return {
        ...state,
        refreshToken: action.refreshToken,
      };
    case "SET_GOOGLE_ACCESS_TOKEN":
      return {
        ...state,
        googleAccesssToken: action.googleAccesssToken,
      };
    case "SET_GOOGLE_TOKEN_ID":
      return {
        ...state,
        googleTokenId: action.googleTokenId,
      };
    default:
      return state;
  }
};

export const setAccessTokene = (accessToken) => ({
  type: "SET_ACCESS_TOKEN",
  accessToken,
});

export const setRefreshTokene = (refreshToken) => {
  return {
    type: "SET_REFRESH_TOKEN",
    refreshToken,
  };
};

export const setGoogleAccessTokene = (googleAccesssToken) => ({
  type: "SET_GOOGLE_ACCESS_TOKEN",
  googleAccesssToken,
});

export const setGoogleTokeneId = (googleTokenId) => {
  return {
    type: "SET_GOOGLE_TOKEN_ID",
    googleTokenId,
  };
};

export const setAsyncAccessTokene = (accessToken) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setAccessTokene(accessToken)));

export const setAsyncRefreshTokene = (refreshToken) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setRefreshTokene(refreshToken)));

export const setAsyncGoogleAccessTokene = (googleAccessToken) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setGoogleAccessTokene(googleAccessToken)));

export const setAsyncGoogleTokeneId = (googleTokenId) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setGoogleTokeneId(googleTokenId)));
