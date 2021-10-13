import React from "react";
import { NavLink } from "react-router-dom";

const HeaderList = () => {
  return (
    <ul className="navbar-nav navbar-nav-hover align-items-lg-center text-center">
      <li className="nav-item">
        <NavLink
          exact
          to="/user"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/find"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Find Job
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/category"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          Category
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/about"
          className="nav-link justify-content-center"
          activeClassName="text-twitter"
        >
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/contact"
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
