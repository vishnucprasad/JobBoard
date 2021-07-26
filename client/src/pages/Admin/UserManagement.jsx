import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import UsersList from "../../components/Admin/UserManagement/UsersList";

const UserManagement = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">User Management</span>
        </h6>
      </div>
      <UsersList />
    </Layout>
  );
};

export default UserManagement;
