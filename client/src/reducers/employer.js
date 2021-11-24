export const employerInitialState = {
  dashboardData: {},
  jobs: [],
};

export const employerActionTypes = {
  POST_JOB: "POST_JOB",
  DELETE_JOB: "DELETE_JOB",
  UPDATE_JOB: "UPDATE_JOB",
  SET_JOBS: "SET_JOBS",
  SET_DASHBOARD_DATA: "SET_DASHBOARD_DATA",
  SET_TO_INITIAL_STATE: "SET_TO_INITIAL_STATE",
};

const employerReducer = (state, action) => {
  switch (action.type) {
    case employerActionTypes.POST_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.job],
      };
    case employerActionTypes.UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map((job) => {
          if (job._id === action.id) {
            return action.updatedJob;
          } else {
            return job;
          }
        }),
      };
    case employerActionTypes.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.id),
      };
    case employerActionTypes.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };
    case employerActionTypes.SET_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.data,
      };
    case employerActionTypes.SET_TO_INITIAL_STATE:
      return employerInitialState;
    default:
      return state;
  }
};

export default employerReducer;
