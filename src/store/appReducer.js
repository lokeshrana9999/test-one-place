export const initialState = {
  accessToken: 'null',
  refreshToken: 'null',
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

export const setAsyncAccessTokene = (accessToken) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setAccessTokene(accessToken)));

export const setAsyncRefreshTokene = (refreshToken) => (dispatch) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setRefreshTokene(refreshToken)));
