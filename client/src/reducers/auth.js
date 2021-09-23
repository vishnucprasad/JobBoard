export const authInitialState = {
  auth: {},
};

export const authActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
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
    default:
      return state;
  }
};

export default authReducer;
