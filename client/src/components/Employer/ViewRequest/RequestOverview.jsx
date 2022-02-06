import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { Accordion, Button, Card } from "react-bootstrap";
import ResumeDetails from "./ResumeDetails";
import JobDetails from "./JobDetails";

const RequestOverview = ({ requestId }) => {
  const [{ resumes }] = useEmployerState();
  const request = resumes.find((resume) => resume._id === requestId);

  return (
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
  );
};

export default RequestOverview;
