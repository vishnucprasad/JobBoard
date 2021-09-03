import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const JobsList = () => {
  const jobs = [
    {
      id: "dgkjsvfbliuhblfuglshf1",
      title: "Web Developer",
      designation: "Backend Developer",
      type: "Full time",
      salary: "$2000",
      workingDays: 20,
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      location: "Western City, UK",
    },
    {
      id: "dgkjsvfbliuhblfuglshf2",
      title: "Web Developer",
      designation: "Backend Developer",
      type: "Full time",
      salary: "$2000",
      workingDays: 20,
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      location: "Western City, UK",
    },
    {
      id: "dgkjsvfbliuhblfuglshf3",
      title: "Web Developer",
      designation: "Backend Developer",
      type: "Full time",
      salary: "$2000",
      workingDays: 20,
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      location: "Western City, UK",
    },
    {
      id: "dgkjsvfbliuhblfuglshf4",
      title: "Web Developer",
      designation: "Backend Developer",
      type: "Full time",
      salary: "$2000",
      workingDays: 20,
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      location: "Western City, UK",
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Jobs</div>
            <div className="w-md-25 ml-auto">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-twitter">
                    <SearchIcon />
                  </span>
                </div>
                <input
                  className="form-control"
                  id="exampleInputIcon1"
                  placeholder="Search for jobs..."
                  type="text"
                  aria-label="Input with icon left"
                />
              </div>
            </div>
            <Link
              to="/empoyer/job-management/create"
              className="btn btn-primary btn-sm font-weight-bolder text-twitter ml-4"
            >
              <div className="d-flex align-items-center">
                <AddIcon />
                <p className="m-0 font-weight-bolder">&nbsp;Add New Job</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {jobs.map((job) => (
              <div key={job.id} className="card shadow-soft rounded mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <Link to={`/employer/job-management/view/${job.id}`}>
                        <p className="text-twitter font-weight-bold text-uppercase">
                          {job.type}
                        </p>
                        <h4 className="font-weight-bold">{job.designation}</h4>
                        <p className="font-weight-bold mt-3 mb-2">
                          <span className="mr-3">
                            <WorkIcon className="text-twitter" />
                            {job.companyName}
                          </span>
                          <span className="mr-3">
                            <LocationOnIcon className="text-twitter" />
                            {job.location}
                          </span>
                          <span className="badge badge-twitter font-weight-bolder px-3">
                            {job.title}
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <div className="text-center mr-4">
                          <p className="font-weight-bold m-0">
                            {job.workingDays} Days
                          </p>
                          <h6 className="text-slack shadow-inset rounded-pill font-weight-bold py-1 px-3">
                            {job.salary}
                          </h6>
                        </div>
                        <div className="w-100">
                          <Link
                            to="/employer/job-management/edit"
                            className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mb-3"
                          >
                            Edit Job
                          </Link>
                          <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3">
                            Remove Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
