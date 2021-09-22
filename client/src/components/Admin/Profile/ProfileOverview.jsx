import React from "react";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import userIcon from "../../../images/user-icon.png";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { actionTypes } from "../../../reducers/auth";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import { adminInstance } from "../../../axios/axios";

const ProfileOverview = () => {
  const [{ auth }, dispatch] = useAuthState();

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        adminInstance.get("/logout").then((response) => {
          if (response.data.status) {
            dispatch({
              type: actionTypes.LOGOUT,
            });
            Toast.fire({
              icon: "success",
              title: response.data.message,
            });
          }
        });
      }
    });
  };

  return (
    <div className="profile-overview">
      <div className="card bg-primary shadow-soft border-light mb-5 text-center p-4">
        <div className="card-header p-0">
          <div className="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mx-auto">
            <img
              src={userIcon}
              className="card-img-top shadow-soft p-3 border border-light rounded-circle"
              alt="Joseph Avatar"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-icon-only text-twitter m-3">
              <PublishIcon />
            </button>
            <button className="btn btn-icon-only text-danger m-3">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="p-3 shadow-inset rounded">
            <div className="shadow-soft rounded p-3">
              <h3 className="h5 mb-2 font-weight-bolder">{auth.name}</h3>
              <span className="h6 font-weight-normal text-gray">
                {auth.role}
              </span>
            </div>
          </div>
          <button
            className="btn btn-block btn-sm text-danger mt-3"
            onClick={handleLogout}
          >
            <PowerSettingsNewIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
