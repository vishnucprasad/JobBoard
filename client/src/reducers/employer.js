export const employerInitialState = {
  jobs: [],
};

export const employerActionTypes = {
  POST_JOB: "POST_JOB",
  SET_JOBS: "SET_JOBS",
  SET_TO_INITIAL_STATE: "SET_TO_INITIAL_STATE",
};

const employerReducer = (state, action) => {
  switch (action.type) {
    case employerActionTypes.POST_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.job],
      };
    case employerActionTypes.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };
    case employerActionTypes.SET_TO_INITIAL_STATE:
      return employerInitialState;
    default:
      return state;
  }
};

export default employerReducer;
