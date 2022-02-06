import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../../components/Employer/ViewJob/JobDetails";
import Loader from "../Loader";
import { employerInstance } from "../../axios/axios";
import { employerActionTypes } from "../../reducers/employer";
import { useEmployerState } from "../../contexts/EmployerStateProvider";

const EmployerViewJob = () => {
  const { id } = useParams();
  const [{ jobs }, dispatch] = useEmployerState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !jobs[0]
      ? employerInstance
          .get("/jobs")
          .then((response) => {
            dispatch({
              type: employerActionTypes.SET_JOBS,
              jobs: response.data,
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
  }, [jobs, dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">View Job</span>
        </h6>
      </div>
      <JobDetails jobId={id} />
    </div>
  );
};

export default EmployerViewJob;
