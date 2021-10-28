import React from "react";
import { useParams } from "react-router";
import ApplyJobForm from "../../components/User/ApplyJob/ApplyJobForm";
import Layout from "../../components/User/Layout/Layout";

const ApplyJob = () => {
  const { id } = useParams();

  return (
    <Layout>
      <ApplyJobForm jobId={id} />
    </Layout>
  );
};

export default ApplyJob;
