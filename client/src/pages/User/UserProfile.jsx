import React from "react";
import EditProfile from "../../components/User/Profile/EditProfile";
import ProfileOverview from "../../components/User/Profile/ProfileOverview";

const UserProfile = () => {
  return (
    <div className="pt-5">
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

export default UserProfile;
