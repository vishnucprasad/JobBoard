import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../axios/axios";
import { useUserState } from "../../contexts/UserStateProvider";
import { userActionTypes } from "../../reducers/user";
import Loader from "../Loader";
import ApplicationOverview from "../../components/User/ViewApplication/ApplicationOverview";

const ViewApplication = () => {
  const { id } = useParams();
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
      <ApplicationOverview applicationId={id} />
    </div>
  );
};

export default ViewApplication;
