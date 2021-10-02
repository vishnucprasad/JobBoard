import React from "react";
import { Dropdown } from "react-bootstrap";
import userIcon from "../../../images/user-icon.png";
import WorkIcon from "@material-ui/icons/Work";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthState } from "../../../contexts/AuthStateProvider";

const HeaderDropdown = () => {
  const [{ auth }] = useAuthState();
  const isAuthenticated = !!auth._id && auth.role === "Jobseeker";

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
            <Dropdown.Item>
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
              <div className="col-9 p-0">Login</div>
            </div>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HeaderDropdown;
