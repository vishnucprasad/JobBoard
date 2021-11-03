import React, { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import ApplicationsList from "../../components/User/ViewAllApplications/ApplicationsList";
import { useUserState } from "../../contexts/UserStateProvider";
import { userActionTypes } from "../../reducers/user";
import Loader from "../Loader";

const ViewAllApplications = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [{ applications }, dispatch] = useUserState();

  useEffect(() => {
    !applications[0]
      ? Axios.get(`/applications`)
          .then(({ data }) => {
            dispatch({
              type: userActionTypes.SET_APPLICATIONS,
              applications: data,
            });
            setIsLoading(false);
          })
          .catch((error) => console.log(error))
      : setIsLoading(false);

    return () => {
      setIsLoading(false);
    };
  }, [applications, dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <ApplicationsList />
    </div>
  );
};

export default ViewAllApplications;
