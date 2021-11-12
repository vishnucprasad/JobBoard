import React, { useState } from "react";
import PublishIcon from "@material-ui/icons/Publish";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import userIcon from "../../../images/user-icon.png";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { authActionTypes } from "../../../reducers/auth";
import { useUserState } from "../../../contexts/UserStateProvider";
import { userActionTypes } from "../../../reducers/user";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import Axios from "../../../axios/axios";

const ProfileOverview = () => {
  const [{ auth }, dispatch] = useAuthState();
  const [, userDispatch] = useUserState();
  const [image, setImage] = useState(null);

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.get("/logout").then((response) => {
          if (response.data.status) {
            dispatch({
              type: authActionTypes.LOGOUT,
            });
            userDispatch({
              type: userActionTypes.SET_TO_INITIAL_STATE,
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

  const handleUpload = (e) => {
    if (image) {
      const formData = new FormData();

      formData.append("newDisplayPicture", image, image.name);

      Axios.patch("/profile/update/displaypicture", formData)
        .then((response) => {
          Axios.delete(`/file/${auth.displayPictureDetails.id}`)
            .then((deleteRresponse) => {
              if (deleteRresponse.data.status) {
                dispatch({
                  type: authActionTypes.UPDATE_AUTH,
                  updates: response.data.user,
                });
                Toast.fire({
                  title: "Updated successfully",
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              Toast.fire({
                title: "Something went wrong, Please try again",
                icon: "error",
              });
            });
        })
        .catch((error) => {
          Toast.fire({
            title: "Something went wrong, Please try again",
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="profile-overview">
      <div className="card bg-primary shadow-soft border-light mb-5 text-center p-4">
        <div className="card-header p-0">
          <div className="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mx-auto">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : auth.displayPicture
                  ? auth.displayPicture
                  : userIcon
              }
              className="card-img-top shadow-soft border border-light rounded-circle"
              alt="Joseph Avatar"
            />
          </div>
          <div className="d-flex justify-content-center">
            {!image ? (
              <div id="companyLogoInput">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input d-none"
                    id="customFile"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                  <label
                    className="btn btn-icon-only text-twitter p-2 m-3"
                    htmlFor="customFile"
                  >
                    <PublishIcon />
                  </label>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-icon-only text-slack m-3"
                onClick={handleUpload}
              >
                <CheckIcon />
              </button>
            )}
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
            <div className="shadow-soft text-left rounded p-3 mt-3">
              <h6 className="mb-2">{auth.description}</h6>
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
