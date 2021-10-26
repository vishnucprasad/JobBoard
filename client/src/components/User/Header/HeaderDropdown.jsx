import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import userIcon from "../../../images/user-icon.png";
import WorkIcon from "@material-ui/icons/Work";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { authActionTypes } from "../../../reducers/auth";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import Axios from "../../../axios/axios";

const HeaderDropdown = () => {
  const [{ auth }, dispatch] = useAuthState();
  const isAuthenticated = !!auth._id && auth.role === "Jobseeker";

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
    <Dropdown>
      <Dropdown.Toggle className="shadow-none border-0" id="dropdown-basic">
        <div className="d-flex align-items-center">
          <div className="header__profile-icon">
            <img
              src={
                isAuthenticated
                  ? auth.displayPicture
                    ? auth.displayPicture
                    : userIcon
                  : userIcon
              }
              alt="user"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="d-none d-md-block text-truncate">
            {isAuthenticated ? auth.name : "Account"}
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isAuthenticated ? (
          <div>
            <Dropdown.Item>
              <div className="row px-2 align-items-center text-twitter">
                <WorkIcon className="col-3 p-0" />
                <div className="col-9 p-0">Applications</div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="row px-2 align-items-center text-twitter">
                <AccountBoxIcon className="col-3 p-0" />
                <div className="col-9 p-0">Profile</div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              <div className="row px-2 align-items-center text-danger">
                <PowerSettingsNewIcon className="col-3 p-0" />
                <div className="col-9 p-0">Logout</div>
              </div>
            </Dropdown.Item>
          </div>
        ) : (
          <Dropdown.Item>
            <div className="row px-2 align-items-center text-danger">
              <ExitToAppIcon className="col-3 p-0" />
              <Link to="/user/login" className="col-9 p-0">
                Login
              </Link>
            </div>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderDropdown;
