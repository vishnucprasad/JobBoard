export const userInitialState = {
  jobs: [],
  applications: [],
};

export const userActionTypes = {
  SET_JOBS: "SET_JOBS",
  SET_APPLICATIONS: "SET_APPLICATIONS",
  ADD_APPLICATION: "ADD_APPLICATION",
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
    default:
      return state;
  }
};

export default userReducer;
