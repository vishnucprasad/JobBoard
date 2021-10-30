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
      </div>
      <JobDetails job={application.jobDetails} />
      <ApplicationDetails application={application} />
    </div>
  ) : (
    <ApplicationNotFound />
  );
};

export default ApplicationOverview;
