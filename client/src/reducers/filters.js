import moment from "moment";

export const filtersInitialState = {
  category: "",
  location: "",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export const filtersActionTypes = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_LOCATION: "SET_LOCATION",
  SET_START_DATE: "SET_START_DATE",
  SET_END_DATE: "SET_END_DATE",
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case filtersActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case filtersActionTypes.SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case filtersActionTypes.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case filtersActionTypes.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filtersReducer;
