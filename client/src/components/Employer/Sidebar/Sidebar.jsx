import React from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="sidebar shadow-soft min-vh-100">
      <div className="sidebar__header card rounded-0 shadow-inset align-items-center justify-content-center row m-0 p-2">
        <h4 className="text-twitter text-center text-capitalize font-weight-bolder shadow-soft rounded w-100 h-100 m-0 pt-3">
          JobBoard
        </h4>
      </div>
      <div>
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
