import React, { useEffect, useState } from "react";
import AproovedResumeList from "../../components/Employer/AproovedRequests/AproovedResumeList";
import { useEmployerState } from "../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../reducers/employer";
import { employerInstance } from "../../axios/axios";
import Loader from "../Loader";

const AproovedRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [{ resumes }, dispatch] = useEmployerState();

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
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Aprooved Requests</span>
        </h6>
      </div>
      <AproovedResumeList />
    </div>
  );
};

export default AproovedRequests;
