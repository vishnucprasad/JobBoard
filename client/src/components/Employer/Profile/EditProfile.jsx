import React from "react";
import ChangePassword from "./ChangePassword";
import SetPassword from "./SetPassword";
import EditPersonalInfo from "./EditPersonalInfo";
import { useAuthState } from "../../../contexts/AuthStateProvider";

const EditProfile = () => {
  const [{ auth }] = useAuthState();

  return (
    <div className="card bg-primary shadow-soft border-light p-4">
      <div className="card-header p-0">
        <h6 className="font-weight-bold text-uppercase">Update Profile</h6>
      </div>
      <div className="card-body shadow-inset rounded scroll-70 p-3 mt-3">
        <EditPersonalInfo />
        {auth.passwordAuth ? <ChangePassword /> : <SetPassword />}
      </div>
    </div>
  );
};

export default EditProfile;
