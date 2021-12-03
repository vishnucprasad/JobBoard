import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { rejectedRequests } from "../../../selectors/employer";
import ActionButtons from "./ActionButtons";

const RejectedResumeList = () => {
  const [{ resumes }] = useEmployerState();
  const requests = rejectedRequests(resumes);

  return (
    <div className="resume-list mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Resumes</div>
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
                  placeholder="Search for resumes..."
                  type="text"
                  aria-label="Input with icon left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {requests[0] ? (
              requests.map((request) => (
                <div
                  key={request._id}
                  className="card shadow-soft rounded mb-4"
                >
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-9">
                        <Link
                          to={`/employer/resume-requests/view/${request._id}`}
                        >
                          <p className="text-twitter font-weight-bold text-uppercase">
                            {request.jobDetails.title} |{" "}
                            {request.jobDetails.type}
                          </p>
                          <div className="d-block d-md-flex text-center align-items-center">
                            <img
                              src={request.photo.url}
                              alt=""
                              className="img-fluid rounded-circle resume-image mr-3"
                            />
                            <h4 className="font-weight-bold m-0">
                              {request.name}
                            </h4>
                          </div>
                          <div className="font-weight-bold mt-3 mb-2">
                            <div className="mb-3">
                              <LocationOnIcon className="text-twitter" />
                              {`${request.location.street}, ${request.location.city}, ${request.location.district}, ${request.location.state}, ${request.location.country}, ${request.location.pinNumber}`}
                            </div>
                            <div className="mr-3">
                              {request.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="badge badge-twitter font-weight-bolder mr-3"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <ActionButtons request={request} />
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
                      There is no resumes to show here.
                    </h5>
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

export default RejectedResumeList;
