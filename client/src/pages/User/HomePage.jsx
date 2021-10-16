import React, { useEffect, useState } from "react";
import Layout from "../../components/User/Layout/Layout";
import Loader from "../Loader";
import { useUserState } from "../../contexts/UserStateProvider";
import { userActionTypes } from "../../reducers/user";
import Axios from "../../axios/axios";
import RecentlyAddedJobs from "../../components/User/HomePage/RecentlyAddedJobs";
import HighestPayingJobs from "../../components/User/HomePage/HighestPayingJobs";

const HomePage = () => {
  const [, dispatch] = useUserState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("/")
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
      <RecentlyAddedJobs />
      <HighestPayingJobs />
    </Layout>
  );
};

export default HomePage;
