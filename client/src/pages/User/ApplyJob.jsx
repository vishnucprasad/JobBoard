import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ApplyJobForm from "../../components/User/ApplyJob/ApplyJobForm";
import Axios from "../../axios/axios";
import Loader from "../Loader";
import JobNotFound from "../../components/User/ApplyJob/JobNotFound";

const ApplyJob = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState(null);

  useEffect(() => {
    Axios.get(`/job/${id}`)
      .then(({ data }) => {
        data && setJob(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
    return () => {
      setIsLoading(false);
    };
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>{job._id ? <ApplyJobForm jobId={id} /> : <JobNotFound />}</div>
  );
};

export default ApplyJob;
