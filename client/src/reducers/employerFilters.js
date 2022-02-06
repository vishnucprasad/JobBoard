import moment from "moment";

export const employerFiltersInitialState = {
  search: "",
  sort: "Date",
  category: "",
  subCategory: "",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export const employerFiltersActionTypes = {
  SET_SEARCH: "SET_SEARCH",
  SET_SORT: "SET_SORT",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SUBCATEGORY: "SET_SUBCATEGORY",
  SET_START_DATE: "SET_START_DATE",
  SET_END_DATE: "SET_END_DATE",
};

const employerFiltersReducer = (state, action) => {
  switch (action.type) {
    case employerFiltersActionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case employerFiltersActionTypes.SET_SORT:
      return {
        ...state,
        sort: action.sort,
      };
    case employerFiltersActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case employerFiltersActionTypes.SET_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.subCategory,
      };
    case employerFiltersActionTypes.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case employerFiltersActionTypes.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default employerFiltersReducer;
