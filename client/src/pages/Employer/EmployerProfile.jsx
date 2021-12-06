import React from "react";
import ProfileOverview from "../../components/Employer/Profile/ProfileOverview";
import EditProfile from "../../components/Employer/Profile/EditProfile";

const EmployerProfile = () => {
  return (
    <div>
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
    </div>
  );
};

export default EmployerProfile;
