import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { Accordion, Button, Card } from "react-bootstrap";
import ResumeDetails from "./ResumeDetails";
import JobDetails from "./JobDetails";
import RequestActionButtons from "./RequestActionButtons";

const RequestOverview = ({ requestId }) => {
  const [{ resumes }] = useEmployerState();
  const request = resumes.find((resume) => resume._id === requestId);

  return (
    <div>
      <div className="shadow-soft rounded p-4 my-4">
        <div className="d-flex align-items-center">
          <h6 className="text-twitter text-uppercase font-weight-bold m-0">
            Request Overview
          </h6>
          <div className="ml-auto d-flex align-items-center">
            <h6 className="text-twitter font-weight-bold text-uppercase m-0">
              Status&nbsp;:&nbsp;
            </h6>
            <span
              className={`badge badge-md ${
                request.status === "Applied"
                  ? "badge-twitter"
                  : request.status === "Approved"
                  ? "badge-slack"
                  : request.status === "Rejected"
                  ? "badge-danger"
                  : "badge-primary"
              } font-weight-bolder px-3`}
            >
              {request.status}
            </span>
          </div>
        </div>
        <div className="shadow-inset rounded p-3 mt-3">
          <RequestActionButtons request={request} />
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        <Card className="shadow-soft rounded">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className="accordion-panel-header d-flex w-100 shadow-none border-0"
            >
              <span class="h6 mb-0 text-uppercase font-weight-bold">
                Resume Details
              </span>
              <span class="ml-auto">
                <AddIcon />
              </span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ResumeDetails request={request} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="shadow-soft rounded">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              className="accordion-panel-header d-flex w-100 shadow-none border-0"
            >
              <span class="h6 mb-0 text-uppercase font-weight-bold">
                Job Details
              </span>
              <span class="ml-auto">
                <AddIcon />
              </span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <JobDetails job={request.jobDetails} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default RequestOverview;
