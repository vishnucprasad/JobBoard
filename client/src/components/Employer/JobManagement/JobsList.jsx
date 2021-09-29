import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import MySwal, { Toast } from "../../../config/sweetalert/swal";
import Axios, { employerInstance } from "../../../axios/axios";

const JobsList = () => {
  const [{ jobs }, dispatch] = useEmployerState();

  const handleDeleteJob = (jobId) => {
    MySwal.fire({
      title: "Are you sure you want to delete this job?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .delete(`/jobs/delete/${jobId}`)
          .then(({ data: job }) => {
            Axios.delete(`/file/${job.companyLogo.id}`)
              .then((response) => {
                if (response.status) {
                  dispatch({
                    type: employerActionTypes.DELETE_JOB,
                    id: jobId,
                  });
                  Toast.fire({
                    title: "Successfully Deleted",
                    icon: "success",
                  });
                }
              })
              .catch((error) => {
                Toast.fire({
                  title: "Something went wrong, Please try again",
                  icon: "error",
                });
              });
          })
          .catch((error) => {
            Toast.fire({
              title: "Something went wrong, Please try again",
              icon: "error",
            });
          });
      }
    });
  };

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
            {jobs[0] && (
              <Link
                to="/employer/job-management/create"
                className="btn btn-primary btn-sm font-weight-bolder text-twitter ml-4"
              >
                <div className="d-flex align-items-center">
                  <AddIcon />
                  <p className="m-0 font-weight-bolder">&nbsp;Post New Job</p>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {jobs[0] ? (
              jobs.map((job) => (
                <div key={job._id} className="card shadow-soft rounded mb-4">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <Link to={`/employer/job-management/view/${job._id}`}>
                          <div className="badge badge-twitter badge-lg font-weight-bolder px-3 mb-4">
                            {job.title} - {job.type}
                          </div>
                          <h4 className="font-weight-bold">
                            {job.designation}
                          </h4>
                          <div className="mt-3 mb-2">
                            <p className="font-weight-bold">
                              <WorkIcon className="text-twitter" />
                              {job.companyName}
                            </p>
                            <p className="font-weight-bold">
                              <LocationOnIcon className="text-twitter text-truncate" />
                              {`${job.location.street}, ${job.location.city}, ${job.location.state}, ${job.location.country}, ${job.location.pinNumber}`}
                            </p>
                            <div>
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
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <div className="d-md-flex align-items-center">
                          <div className="text-center mr-md-4">
                            <p className="font-weight-bold m-0">
                              {job.experience}
                            </p>
                            <h6 className="text-slack shadow-inset rounded-pill font-weight-bold py-1 px-3">
                              {numeral(job.salary).format("$0,0.00")}
                            </h6>
                          </div>
                          <div className="w-100">
                            <Link
                              to={`/employer/job-management/edit/${job._id}`}
                              className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mb-3"
                            >
                              Edit Job
                            </Link>
                            <button
                              className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3"
                              onClick={() => handleDeleteJob(job._id)}
                            >
                              Remove Job
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card shadow-soft rounded mb-4">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="font-weight-bold my-4">
                      There is no jobs to show here
                    </h5>
                    <Link
                      to="/employer/job-management/create"
                      className="btn btn-primary btn-sm font-weight-bolder text-twitter rounded-pill ml-4 px-5"
                    >
                      <div className="d-flex align-items-center">
                        <p className="m-0 font-weight-bolder">
                          &nbsp;Post a job
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
