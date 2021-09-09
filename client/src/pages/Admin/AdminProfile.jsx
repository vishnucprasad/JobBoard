import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import ProfileOverview from "../../components/Admin/Profile/ProfileOverview";
import EditProfile from "../../components/Admin/Profile/EditProfile";

const AdminProfile = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Profile</span>
        </h6>
      </div>
      <div className="row profile">
        <div className="col-md-4">
          <ProfileOverview />
        </div>
        <div className="col-md-8">
          <EditProfile />
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
