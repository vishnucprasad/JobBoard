import React from "react";
import { NavLink } from "react-router-dom";

const HeaderList = () => {
  return (
    <ul className="navbar-nav navbar-nav-hover align-items-lg-center text-center">
      <li className="nav-item">
        <NavLink
          to="/"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/category"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Category
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderList;
