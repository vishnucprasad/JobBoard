import React from "react";
import AproovedResumeList from "../../components/Employer/AproovedRequests/AproovedResumeList";
import Layout from "../../components/Employer/Layout/Layout";

const AproovedRequests = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Aprooved Requests</span>
        </h6>
      </div>
      <AproovedResumeList />
    </Layout>
  );
};

export default AproovedRequests;
