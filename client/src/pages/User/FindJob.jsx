import React from "react";
import Layout from "../../components/User/Layout/Layout";
import { FiltersStateProvider } from "../../contexts/FiltersStateProvider";
import filtersReducer, { filtersInitialState } from "../../reducers/filters";
import FindJobFilters from "../../components/User/FindJob/FindJobFilters";
import JobsList from "../../components/User/FindJob/JobsList";

const FindJob = () => {
  return (
    <Layout>
      <FiltersStateProvider
        reducer={filtersReducer}
        initialState={filtersInitialState}
      >
        <FindJobFilters />
        <JobsList />
      </FiltersStateProvider>
    </Layout>
  );
};

export default FindJob;
