import React, { useEffect, useState } from "react";
import FindJob from "../../components/User/HomePage/FindJob";
import Layout from "../../components/User/Layout/Layout";
import Loader from "../Loader";
import { FiltersStateProvider } from "../../contexts/FiltersStateProvider";
import filtersReducer, { filtersInitialState } from "../../reducers/filters";
import { useUserState } from "../../contexts/UserStateProvider";
import { userActionTypes } from "../../reducers/user";
import Axios from "../../axios/axios";

const HomePage = () => {
  const [, dispatch] = useUserState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("/jobs")
      .then((response) => {
        dispatch({
          type: userActionTypes.SET_JOBS,
          jobs: response.data,
        });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {
      setIsLoading(false);
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
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
