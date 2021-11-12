export const authInitialState = {
  auth: {},
};

export const authActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  UPDATE_AUTH: "UPDATE_AUTH",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        auth: { ...action.auth },
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        auth: {},
      };
    case authActionTypes.UPDATE_AUTH:
      return {
        ...state,
        auth: { ...state.auth, ...action.updates },
      };
    default:
      return state;
  }
};

export default authReducer;
