import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-content user-layout-content container pt-3 pb-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
