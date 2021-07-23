import React from "react";
import EmployersList from "../../components/Admin/EmployerManagement/EmployersList";
import Layout from "../../components/Admin/Layout/Layout";

const EmployerManagement = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Employer Management</span>
        </h6>
      </div>
      <EmployersList />
    </Layout>
  );
};

export default EmployerManagement;
