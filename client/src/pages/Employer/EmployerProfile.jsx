import React from "react";
import Layout from "../../components/Employer/Layout/Layout";
import ProfileOverview from "../../components/Employer/Profile/ProfileOverview";
import EditProfile from "../../components/Employer/Profile/EditProfile";

const EmployerProfile = () => {
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

export default EmployerProfile;
