import React from "react";
import FindJob from "../../components/User/HomePage/FindJob";
import Layout from "../../components/User/Layout/Layout";
import { FiltersStateProvider } from "../../contexts/FiltersStateProvider";
import filtersReducer, { filtersInitialState } from "../../reducers/filters";

const HomePage = () => {
  return (
    <Layout>
      <FiltersStateProvider
        reducer={filtersReducer}
        initialState={filtersInitialState}
      >
        <FindJob />
      </FiltersStateProvider>
    </Layout>
  );
};

export default HomePage;
