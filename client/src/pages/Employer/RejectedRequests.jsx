import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import RejectedResumeList from "../../components/Employer/RejectedRequests/RejectedResumeList";

const RejectedRequests = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Rejected Requests</span>
        </h6>
      </div>
      <RejectedResumeList />
    </Layout>
  );
};

export default RejectedRequests;
