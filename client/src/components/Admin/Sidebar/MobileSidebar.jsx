import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import SidebarMenu from "./SidebarMenu";

const MobileSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="d-md-none d-block">
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
          <SidebarMenu />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MobileSidebar;
