export const employerInitialState = {
  dashboardData: null,
  jobs: [],
  resumes: [],
  notifications: [],
};

export const employerActionTypes = {
  POST_JOB: "POST_JOB",
  DELETE_JOB: "DELETE_JOB",
  UPDATE_JOB: "UPDATE_JOB",
  SET_JOBS: "SET_JOBS",
  SET_DASHBOARD_DATA: "SET_DASHBOARD_DATA",
  SET_RESUMES: "SET_RESUMES",
  UPDATE_RESUMES: "UPDATE_RESUMES",
  ADD_RESUME: "ADD_RESUME",
  DELETE_RESUME: "DELETE_RESUME",
  SET_NOTIFICATIONS: "SET_NOTIFICATIONS",
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  UPDATE_READSTATUS: "UPDATE_READSTATUS",
  UPDATE_READSTATUS_ALL: "UPDATE_READSTATUS_ALL",
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
    case employerActionTypes.SET_RESUMES:
      return {
        ...state,
        resumes: action.resumes,
      };
    case employerActionTypes.UPDATE_RESUMES:
      return {
        ...state,
        resumes: state.resumes.map((resume) => {
          if (resume._id === action.resumeId) {
            return {
              ...resume,
              ...action.updates,
            };
          } else {
            return resume;
          }
        }),
      };
    case employerActionTypes.ADD_RESUME:
      return {
        ...state,
        resumes: [...state.resumes, action.resume],
      };
    case employerActionTypes.DELETE_RESUME:
      return {
        ...state,
        resumes: state.resumes.filter(
          (resume) => resume._id !== action.resumeId
        ),
      };
    case employerActionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.notifications,
      };
    case employerActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.notification, ...state.notifications],
      };
    case employerActionTypes.UPDATE_READSTATUS:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          if (notification._id === action.notificationId) {
            return {
              ...notification,
              readStatus: action.readStatus,
            };
          } else {
            return notification;
          }
        }),
      };
    case employerActionTypes.UPDATE_READSTATUS_ALL:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          return {
            ...notification,
            readStatus: true,
          };
        }),
      };
    case employerActionTypes.SET_TO_INITIAL_STATE:
      return employerInitialState;
    default:
      return state;
  }
};

export default employerReducer;
