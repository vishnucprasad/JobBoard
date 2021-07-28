import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import UserActivityList from "../../components/Admin/UserActivity/UserActivityList";

const UserActivity = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">User Activity Track</span>
        </h6>
      </div>
      <UserActivityList />
    </Layout>
  );
};

export default UserActivity;
