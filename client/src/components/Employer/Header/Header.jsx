import React from "react";
import MobileSidebar from "../Sidebar/MobileSidebar";
import HeaderDropdown from "./HeaderDropdown";
import Notifications from "./Notifications";

const Header = () => {
  return (
    <div className="header card rounded-0 shadow-soft align-items-center row m-0 p-3">
      <div className="mr-auto">
        <h4 className="text-twitter text-capitalize font-weight-bolder shadow-soft rounded d-md-none d-block px-4 py-2 m-0">
          JobBoard
        </h4>
      </div>
      <div className="ml-auto d-flex">
        <Notifications />
        <HeaderDropdown />
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Header;
