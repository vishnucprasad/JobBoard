import React from "react";
import ChangePassword from "./ChangePassword";
import EditPersonalInfo from "./EditPersonalInfo";

const EditProfile = () => {
  return (
    <div className="card bg-primary shadow-soft border-light p-4">
      <div className="card-header p-0">
        <h6 className="font-weight-bold text-uppercase">Update Profile</h6>
      </div>
      <div className="card-body shadow-inset rounded p-3 mt-3">
        <div className="row">
          <div className="col-md-6 pr-md-2 mb-3 mb-md-0">
            <EditPersonalInfo />
          </div>
          <div className="col-md-6 pl-md-2">
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
