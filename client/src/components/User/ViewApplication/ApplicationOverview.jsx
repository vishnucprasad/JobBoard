import React from "react";
import ApplicationNotFound from "./ApplicationNotFound";
import { useUserState } from "../../../contexts/UserStateProvider";
import JobDetails from "./JobDetails";
import ApplicationDetails from "./ApplicationDetails";

const ApplicationOverview = ({ applicationId }) => {
  const [{ applications }] = useUserState();

  const application = applications.find(
    (application) => applicationId === application._id
  );

  return application ? (
    <div>
      <div className="d-flex align-items-center shadow-soft rounded p-4 my-4">
        <h4 className="text-twitter font-weight-bold m-0">
          Application Overview
        </h4>
        <div className="ml-auto d-flex align-items-center">
          <h6 className="text-twitter font-weight-bold text-uppercase m-0">
            Status&nbsp;:&nbsp;
          </h6>
          <span
            className={`badge badge-md ${
              application.status === "Applied"
                ? "badge-twitter"
                : application.status === "Approved"
                ? "badge-success"
                : application.status === "Appointed"
                ? "badge-slack"
                : application.status === "Rejected"
                ? "badge-danger"
                : "badge-primary"
            } font-weight-bolder px-3`}
          >
            {application.status}
          </span>
        </div>
      </div>
      <JobDetails job={application.jobDetails} />
      <ApplicationDetails application={application} />
    </div>
  ) : (
    <ApplicationNotFound />
  );
};

export default ApplicationOverview;
