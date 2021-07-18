import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import PieChartIcon from "@material-ui/icons/PieChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const SidebarMenu = () => {
  return (
    <ListGroup as="ul" className="sidebar__menu">
      <NavLink to="/admin/dashboard" activeClassName="bg-light text-twitter">
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <DashboardIcon className="col-3 p-0" />
            <div className="col-9 p-0">Dashboard</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/admin/employer-management"
        activeClassName="shadow-inset text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <PersonAddIcon className="col-3 p-0" />
            <div className="col-9 p-0">Employer management</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/admin/job-management"
        activeClassName="shadow-inset text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <WorkIcon className="col-3 p-0" />
            <div className="col-9 p-0">Job management</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/admin/user-management"
        activeClassName="shadow-inset text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <PersonIcon className="col-3 p-0" />
            <div className="col-9 p-0">User management</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/admin/user-activity"
        activeClassName="shadow-inset text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <PieChartIcon className="col-3 p-0" />
            <div className="col-9 p-0">User activity track</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/admin/profile" activeClassName="shadow-inset text-twitter">
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <AccountBoxIcon className="col-3 p-0" />
            <div className="col-9 p-0">Profile</div>
          </div>
        </ListGroup.Item>
      </NavLink>
    </ListGroup>
  );
};

export default SidebarMenu;
