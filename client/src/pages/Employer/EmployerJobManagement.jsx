import React, { useEffect, useState } from "react";
import Layout from "../../components/Employer/Layout/Layout";
import JobsList from "../../components/Employer/JobManagement/JobsList";
import Loader from "../Loader";
import { employerInstance } from "../../axios/axios";
import { employerActionTypes } from "../../reducers/employer";
import { useEmployerState } from "../../contexts/EmployerStateProvider";

const EmployerJobManagement = () => {
  const [{ jobs }, dispatch] = useEmployerState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    !jobs[0]
      ? employerInstance
          .get("/jobs")
          .then((response) => {
            dispatch({
              type: employerActionTypes.SET_JOBS,
              jobs: response.data,
            });
            setIsloading(false);
          })
          .catch((error) => {
            console.log(error);
          })
      : setIsloading(false);
  }, [jobs, dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Job Management</span>
        </h6>
      </div>
      <JobsList />
    </Layout>
  );
};

export default EmployerJobManagement;
