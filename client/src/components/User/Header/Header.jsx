import React from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import HeaderList from "./HeaderList";
import MobileHeader from "./MobileHeader";
import Notifications from "./Notifications";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary mb-4">
        <div className="container position-relative">
          <Link
            to="/"
            className="navbar-brand shadow-soft rounded py-2 px-2 px-md-5 mr-lg-5"
          >
            <h4 className="text-capitalize text-twitter font-weight-bolder m-0 d-none d-md-block">
              JobBoard
            </h4>
            <h6 className="text-capitalize text-twitter font-weight-bolder m-0 d-block d-md-none">
              JobBoard
            </h6>
          </Link>
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-flex align-items-center">
              <div>
                <HeaderList />
              </div>
              <div>
                <Notifications />
              </div>
              <div>
                <HeaderDropdown />
              </div>
              <div>
                <Link
                  to="/employer"
                  className="btn btn-twitter btn-sm btn-pill px-3 ml-md-3"
                >
                  Post a Job
                </Link>
              </div>
            </div>
            <MobileHeader />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
