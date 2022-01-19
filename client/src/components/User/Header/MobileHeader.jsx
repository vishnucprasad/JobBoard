import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderList from "./HeaderList";
import HeaderDropdown from "./HeaderDropdown";
import Notifications from "./Notifications";

const MobileHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="d-lg-none d-flex align-items-center">
      <div>
        <HeaderDropdown />
      </div>
      <div>
        <Notifications />
      </div>
      <button
        className="btn btn-primary btn-icon-only"
        onClick={() => setShow(true)}
      >
        <MenuIcon />
      </button>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="text-twitter text-capitalize font-weight-bolder shadow-soft rounded px-4 py-2 m-0">
              JobBoard
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HeaderList />
          <div>
            <Link
              to="/employer"
              className="btn btn-twitter btn-sm btn-block px-3 ml-md-3"
            >
              Post a Job
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MobileHeader;
