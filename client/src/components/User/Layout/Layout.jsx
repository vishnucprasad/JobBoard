import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-content container pt-3">{children}</div>
    </div>
  );
};

export default Layout;
