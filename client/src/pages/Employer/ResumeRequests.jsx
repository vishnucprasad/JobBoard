import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import ResumeList from "../../components/Employer/ResumeRequests/ResumeList";

const ResumeRequests = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Resume Requests</span>
        </h6>
      </div>
      <ResumeList />
    </Layout>
  );
};

export default ResumeRequests;
