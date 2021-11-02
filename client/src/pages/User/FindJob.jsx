import React from "react";
import { FiltersStateProvider } from "../../contexts/FiltersStateProvider";
import filtersReducer, { filtersInitialState } from "../../reducers/filters";
import FindJobFilters from "../../components/User/FindJob/FindJobFilters";
import JobsList from "../../components/User/FindJob/JobsList";

const FindJob = () => {
  return (
    <div>
      <FiltersStateProvider
        reducer={filtersReducer}
        initialState={filtersInitialState}
      >
        <FindJobFilters />
        <JobsList />
      </FiltersStateProvider>
    </div>
  );
};

export default FindJob;
