export const userInitialState = {
  jobs: [],
  applications: [],
};

export const userActionTypes = {
  SET_JOBS: "SET_JOBS",
  SET_APPLICATIONS: "SET_APPLICATIONS",
  ADD_APPLICATION: "ADD_APPLICATION",
  SET_TO_INITIAL_STATE: "SET_TO_INITIAL_STATE",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };
    case userActionTypes.SET_APPLICATIONS:
      return {
        ...state,
        applications: action.applications,
      };
    case userActionTypes.ADD_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.application],
      };
    case userActionTypes.SET_TO_INITIAL_STATE:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
