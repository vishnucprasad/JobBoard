import React from "react";
import { Dropdown } from "react-bootstrap";
import userIcon from "../../../images/user-icon.png";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { authActionTypes } from "../../../reducers/auth";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import { adminInstance } from "../../../axios/axios";

const HeaderDropdown = () => {
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
            <img src={userIcon} alt="user" className="img-fluid" />
          </div>
          <div className="d-none d-md-block">{auth.name}</div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
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
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderDropdown;
