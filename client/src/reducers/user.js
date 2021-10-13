export const userInitialState = {
  jobs: {},
};

export const userActionTypes = {
  SET_JOBS: "SET_JOBS",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };
    default:
      return state;
  }
};

export default userReducer;
