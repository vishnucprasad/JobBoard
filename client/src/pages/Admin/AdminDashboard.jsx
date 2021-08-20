import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import DashboardTiles from "../../components/Admin/Dashboard/DashboardTiles";
import DashboardCharts from "../../components/Admin/Dashboard/DashboardCharts";

const AdminDashboard = () => {
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

export default AdminDashboard;
