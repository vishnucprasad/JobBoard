import React from "react";
import numeral from "numeral";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import JobNotFound from "./JobNotFound";

const JobDetails = ({ jobId }) => {
  const [{ jobs }] = useEmployerState();

  const job = jobs.find((job) => job._id === jobId);

  return job ? (
    <div className="resume-list mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Job Details</div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3">
          <div className="scroll-70 px-2 pt-2">
            <div className="shadow-soft p-4">
              <div className="d-md-flex pb-3 border-bottom border-twitter">
                <div>
                  <img
                    src={job.companyLogo.url}
                    alt=""
                    className="img-fluid company-logo mr-md-4 mb-4 mb-md-0"
                  />
                </div>
                <div>
                  <h3 className="font-weight-bold mb-3">{job.companyName}</h3>
                  <div className="d-flex align-items-baseline">
                    <div className="text-twitter">
                      <LocationOnIcon />
                    </div>
                    <h6>
                      {job.location.street}, {job.location.city},{" "}
                      {job.location.district}, {job.location.state},{" "}
                      {job.location.country}, PIN: {job.location.pinNumber}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="d-md-flex py-3 align-items-center">
                <h5 className="font-weight-bold text-twitter text-center">
                  {job.title}
                </h5>
                <div className="ml-auto shadow-inset text-twitter text-center font-weight-bold rounded px-4 py-1">
                  {job.type}
                </div>
              </div>
              <div>
                <p>{job.description}</p>
              </div>
              <div className="pb-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="badge badge-twitter font-weight-bolder px-3 mr-3 my-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-3 border-top border-twitter">
                <h5 className="font-weight-bold mb-3">Requirements</h5>
                <div className="row mb-3">
                  <div className="col-6 col-md-4 font-weight-bold">
                    Availability
                  </div>
                  <div className="col-6 col-md-8">: {job.type}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 col-md-4 font-weight-bold">
                    Experience
                  </div>
                  <div className="col-6 col-md-8">: {job.experience}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 col-md-4 font-weight-bold">
                    Languages
                  </div>
                  <div className="col-6 col-md-8">
                    : {job.languages.map((language) => `${language}, `)}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 col-md-4 font-weight-bold">
                    Qualification
                  </div>
                  <div className="col-6 col-md-8">: {job.qualification}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-6 col-md-4 font-weight-bold">Salary</div>
                  <div className="col-6 col-md-8">
                    : {numeral(job.salary).format("$0,0.00")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <JobNotFound />
  );
};

export default JobDetails;
