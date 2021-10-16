import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader";
import Layout from "../../components/User/Layout/Layout";
import Axios from "../../axios/axios";
import JobDetails from "../../components/User/ViewJob/JobDetails";

const ViewJob = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    Axios.get(`/job/${id}`)
      .then((response) => {
        if (response.data._id) {
          setJob(response.data);
        } else {
          setJob(undefined);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setJob(undefined);
        setIsLoading(false);
      });
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <JobDetails job={job} />
    </Layout>
  );
};

export default ViewJob;
