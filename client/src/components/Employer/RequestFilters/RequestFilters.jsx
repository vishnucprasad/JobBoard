import React from "react";
import { EmployerFiltersStateProvider } from "../../../contexts/EmployerFiltersStateProvider";
import employerFiltersReducer, {
  employerFiltersInitialState,
} from "../../../reducers/employerFilters";
import RequestFiltersInput from "./RequestFiltersInput";

const RequestFilters = () => {
  return (
    <EmployerFiltersStateProvider
      reducer={employerFiltersReducer}
      initialState={employerFiltersInitialState}
    >
      <RequestFiltersInput />
    </EmployerFiltersStateProvider>
  );
};

export default RequestFilters;
