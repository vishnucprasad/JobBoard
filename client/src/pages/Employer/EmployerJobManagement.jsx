import React, { useEffect, useState } from "react";
import JobsList from "../../components/Employer/JobManagement/JobsList";
import Loader from "../Loader";
import { employerInstance } from "../../axios/axios";
import { employerActionTypes } from "../../reducers/employer";
import { useEmployerState } from "../../contexts/EmployerStateProvider";

const EmployerJobManagement = () => {
  const [{ jobs }, dispatch] = useEmployerState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !jobs[0]
      ? employerInstance
          .get("/jobs")
          .then((response) => {
            if (response.data[0]) {
              dispatch({
                type: employerActionTypes.SET_JOBS,
                jobs: response.data,
              });
            }
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
          <span className="">Job Management</span>
        </h6>
      </div>
      <JobsList />
    </div>
  );
};

export default EmployerJobManagement;
