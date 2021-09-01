import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import JobsList from "../../components/Employer/JobManagement/JobsList";

const EmployerJobManagement = () => {
  return (
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
