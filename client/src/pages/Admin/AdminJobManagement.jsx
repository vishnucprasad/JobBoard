import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import JobsList from "../../components/Admin/JobManagement/JobsList";

const AdminJobManagement = () => {
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

export default AdminJobManagement;
