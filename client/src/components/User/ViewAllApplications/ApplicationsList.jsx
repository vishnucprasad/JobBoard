import React from "react";
import numeral from "numeral";
import moment from "moment";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useUserState } from "../../../contexts/UserStateProvider";
import { Link } from "react-router-dom";

const ApplicationsList = () => {
  const [{ applications }] = useUserState();

  return (
    <div className="py-4">
      <div className="mb-4">
        <h4 className="text-twitter font-weight-bold m-0">My Applications</h4>
      </div>
      <div className="row">
        {applications.map((application) => (
          <div key={application._id} className="col-md-6 animate-up-8 mb-4">
            <Link to={`/user/application/view/${application._id}`}>
              <div className="card bg-primary shadow-soft border-light">
                <div className="card-body">
                  <div className="text-center mb-3">
                    Applied as {application.name} on{" "}
                    {moment(parseInt(application.createdAt)).format(
                      "MMMM Do, YYYY"
                    )}
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="font-weight-bold m-0">
                      {application.jobDetails.designation}
                    </h4>
                    <div className="ml-auto text-slack font-weight-bold">
                      {numeral(application.jobDetails.salary).format("$0,0.00")}{" "}
                      <span className="text-twitter">LPA</span>
                    </div>
                  </div>
                  <div className="mt-3 mb-2">
                    <p className="font-weight-bold">
                      <WorkIcon className="text-twitter" />
                      {application.jobDetails.companyName}
                    </p>
                    <p className="font-weight-bold">
                      <LocationOnIcon className="text-twitter text-truncate" />
                      {`${application.jobDetails.location.street}, ${application.jobDetails.location.city}, ${application.jobDetails.location.district}, ${application.jobDetails.location.state}, ${application.jobDetails.location.country}, ${application.jobDetails.location.pinNumber}`}
                    </p>
                    <div className="text-truncate">
                      {application.jobDetails.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="badge badge-twitter font-weight-bolder px-3 mr-3"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`${
                        application.status === "Applied"
                          ? "bg-twitter"
                          : application.status === "Approved"
                          ? "bg-slack"
                          : application.status === "Rejected"
                          ? "bg-danger"
                          : "bg-primary"
                      } text-white text-center rounded w-100 mt-3 p-1`}
                    >
                      <h6 className="font-weight-bolder m-0">
                        Status: {application.status}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsList;
