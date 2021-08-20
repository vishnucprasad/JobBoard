import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CloseIcon from "@material-ui/icons/Close";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const SidebarMenu = () => {
  return (
    <ListGroup as="ul" className="sidebar__menu">
      <NavLink to="/employer/dashboard" activeClassName="bg-light text-twitter">
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <DashboardIcon className="col-3 p-0" />
            <div className="col-9 p-0">Dashboard</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/employer/job-management"
        activeClassName="bg-light text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <WorkIcon className="col-3 p-0" />
            <div className="col-9 p-0">Job management</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/employer/resume-requests"
        activeClassName="bg-light text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <RecentActorsIcon className="col-3 p-0" />
            <div className="col-9 p-0">Resume Requests</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/employer/approved-requests"
        activeClassName="bg-light text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <DoneAllIcon className="col-3 p-0" />
            <div className="col-9 p-0">Approved Requests</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink
        to="/employer/rejected-requests"
        activeClassName="bg-light text-twitter"
      >
        <ListGroup.Item as="li" className="border-0 font-weight-bold">
          <div className="row px-2 align-items-center">
            <CloseIcon className="col-3 p-0" />
            <div className="col-9 p-0">Rejected Requests</div>
          </div>
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/employer/profile" activeClassName="bg-light text-twitter">
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
