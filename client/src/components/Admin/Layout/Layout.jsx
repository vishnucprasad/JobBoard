import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout row m-0">
      <div className="col-md-2 col-10 d-none d-md-block p-0">
        <Sidebar />
      </div>
      <div className="col-md-10 p-0">
        <Header />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
