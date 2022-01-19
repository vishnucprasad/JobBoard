export const userInitialState = {
  jobs: [],
  applications: [],
  notifications: [],
};

export const userActionTypes = {
  SET_JOBS: "SET_JOBS",
  SET_APPLICATIONS: "SET_APPLICATIONS",
  ADD_APPLICATION: "ADD_APPLICATION",
  UPDATE_APPLICATION_STATUS: "UPDATE_APPLICATION_STATUS",
  SET_NOTIFICATIONS: "SET_NOTIFICATIONS",
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
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
    case userActionTypes.UPDATE_APPLICATION_STATUS:
      return {
        ...state,
        applications: state.applications.map((application) => {
          if (application._id === action.applicationId) {
            return {
              ...application,
              status: action.status,
            };
          } else {
            return application;
          }
        }),
      };
    case userActionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.notifications,
      };
    case userActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.notification, ...state.notifications],
      };
    case userActionTypes.SET_TO_INITIAL_STATE:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
