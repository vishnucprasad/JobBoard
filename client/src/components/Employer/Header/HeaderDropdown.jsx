import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import userIcon from "../../../images/user-icon.png";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { authActionTypes } from "../../../reducers/auth";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import { employerInstance } from "../../../axios/axios";

const HeaderDropdown = () => {
  const [{ auth }, dispatch] = useAuthState();
  const [, employerDipatch] = useEmployerState();

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance.get("/logout").then((response) => {
          if (response.data.status) {
            dispatch({
              type: authActionTypes.LOGOUT,
            });
            employerDipatch({
              type: employerActionTypes.SET_TO_INITIAL_STATE,
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
              src={auth.displayPicture || userIcon}
              alt="user"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="d-none d-md-block text-truncate">{auth.name}</div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link
            to="/employer/profile"
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
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderDropdown;
