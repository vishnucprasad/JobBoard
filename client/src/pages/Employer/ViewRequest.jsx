import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployerState } from "../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../reducers/employer";
import { employerInstance } from "../../axios/axios";
import Loader from "../Loader";
import RequestDetails from "../../components/Employer/ViewRequest/RequestOverview";

const ViewRequest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [{ resumes }, dispatch] = useEmployerState();
  const { id } = useParams();

  useEffect(() => {
    !resumes[0]
      ? employerInstance
          .get("/resumes")
          .then((response) => {
            dispatch({
              type: employerActionTypes.SET_RESUMES,
              resumes: response.data,
            });
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          })
      : setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, [dispatch, resumes, setIsLoading]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">View Resume</h6>
      </div>
      <RequestDetails requestId={id} />
    </div>
  );
};

export default ViewRequest;
