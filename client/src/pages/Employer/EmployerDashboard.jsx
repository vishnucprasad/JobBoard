import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import DashboardTiles from "../../components/Employer/Dashboard/DashboardTiles";
import DashboardCharts from "../../components/Employer/Dashboard/DashboardCharts";

const EmployerDashboard = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Dashboard</span>
        </h6>
      </div>
      <DashboardTiles />
      <DashboardCharts />
    </Layout>
  );
};

export default EmployerDashboard;
