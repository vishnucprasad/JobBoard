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
          <div className="text-truncate">
            {isAuthenticated ? auth.name : "Account"}
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isAuthenticated ? (
          <div>
            <Dropdown.ItemText>
              <div className="row align-items-center">
                <div className="col-4 px-1">
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
                <div className="col-8 px-1">
                  <div className="text-truncate text-twitter font-weight-bolder">
                    {isAuthenticated ? auth.name : "Account"}
                  </div>
                </div>
              </div>
            </Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link
                to="/user/applications"
                className="row px-2 align-items-center text-twitter"
              >
                <WorkIcon className="col-3 p-0" />
                <div className="col-9 p-0">Applications</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/user/profile"
                className="row px-2 align-items-center text-twitter"
              >
                <AccountBoxIcon className="col-3 p-0" />
                <div className="col-9 p-0">Profile</div>
              </Link>
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
            <Link
              to="/user/login"
              className="row px-2 align-items-center text-danger"
            >
              <ExitToAppIcon className="col-3 p-0" />
              <div className="col-9 p-0">Login</div>
            </Link>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderDropdown;
