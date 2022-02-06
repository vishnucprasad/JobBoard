import React from "react";
import moment from "moment";
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
      <div className="shadow-soft rounded p-4 my-4">
        <div className="d-flex align-items-center">
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
        {application.schedule && (
          <div>
            <div className="d-flex align-items-center mt-4">
              <div className="mr-4">{`An ${
                application.schedule.meetingType
              } scheduled on ${moment(
                parseInt(application.schedule.date)
              ).format("MMMM Do YYYY")} at ${application.schedule.time}`}</div>
              {application.schedule.meetingType === "online meeting" ? (
                <a
                  className="btn btn-primary btn-sm font-weight-bold px-5 ml-auto"
                  href={application.schedule.meetingLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join
                </a>
              ) : (
                <a
                  className="btn btn-primary btn-sm font-weight-bold px-5 ml-auto"
                  href={application.schedule.locationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Location
                </a>
              )}
            </div>
            <h6 className="text-twitter font-weight-bold mt-4">
              Message from Employer
            </h6>
            <div className="shadow-inset rounded p-4">
              <p className="m-0">{application.schedule.message}</p>
            </div>
          </div>
        )}
      </div>
      <JobDetails job={application.jobDetails} />
      <ApplicationDetails application={application} />
    </div>
  ) : (
    <ApplicationNotFound />
  );
};

export default ApplicationOverview;
