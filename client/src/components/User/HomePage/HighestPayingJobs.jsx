import React from "react";
import numeral from "numeral";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useUserState } from "../../../contexts/UserStateProvider";
import { Link } from "react-router-dom";

const HeighestPayingJobs = () => {
  const [
    {
      jobs: { highestPayingJobs },
    },
  ] = useUserState();

  return (
    <div className="py-4">
      <div className="d-flex align-items-center px-1">
        <div>
          <h5 className="text-twitter font-weight-bold m-0">
            Highest Paying Jobs
          </h5>
        </div>
        <div className="ml-auto">
          <Link
            to="/user/find"
            className="btn btn-primary btn-sm text-twitter font-weight-bold"
          >
            Find more jobs
          </Link>
        </div>
      </div>
      <div className="row">
        {highestPayingJobs.map((job) => (
          <div key={job._id} className="col-md-6 p-3">
            <div className="card bg-primary shadow-soft border-light">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="font-weight-bold m-0">{job.designation}</h4>
                  <div className="ml-auto text-slack font-weight-bold">
                    {numeral(job.salary).format("$0,0.00")}{" "}
                    <span className="text-twitter">LPA</span>
                  </div>
                </div>
                <div className="mt-3 mb-2">
                  <p className="font-weight-bold">
                    <WorkIcon className="text-twitter" />
                    {job.companyName}
                  </p>
                  <p className="font-weight-bold">
                    <LocationOnIcon className="text-twitter text-truncate" />
                    {`${job.location.street}, ${job.location.city}, ${job.location.district}, ${job.location.state}, ${job.location.country}, ${job.location.pinNumber}`}
                  </p>
                  <div className="text-truncate">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge badge-twitter font-weight-bolder px-3 mr-3"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <Link
                      to={`/user/job/view/${job._id}`}
                      className="btn btn-primary text-twitter font-weight-bolder btn-sm btn-block mb-4 mb-md-0"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link
                      to={`/user/job/apply/${job._id}`}
                      className="btn btn-primary text-slack font-weight-bolder btn-sm btn-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeighestPayingJobs;
