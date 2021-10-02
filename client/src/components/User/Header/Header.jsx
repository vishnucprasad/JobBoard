import React from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import HeaderList from "./HeaderList";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary mb-4">
        <div className="container position-relative">
          <Link
            to="/"
            className="navbar-brand shadow-soft rounded py-2 px-5 mr-lg-5"
          >
            <h4 className="text-capitalize text-twitter font-weight-bolder m-0">
              JobBoard
            </h4>
          </Link>
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-flex align-items-center">
              <div>
                <HeaderList />
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
