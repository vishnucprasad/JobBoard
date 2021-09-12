import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import PostJobForm from "../../components/Employer/PostJob/PostJobForm";

const PostJob = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Post a Job</span>
        </h6>
      </div>
      <PostJobForm />
    </Layout>
  );
};

export default PostJob;
