import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PdfViewer from "../../../config/PdfViewer/PdfViewer";

const ApplicationDetails = ({ application }) => {
  return (
    <div className="resume-list mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Application Details</div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3">
          <div className="shadow-soft rounded p-4">
            <div className="d-md-flex pb-3 border-bottom border-twitter">
              <div>
                <img
                  src={application.photo.url}
                  alt=""
                  className="img-fluid company-logo mr-md-4 mb-4 mb-md-0"
                />
              </div>
              <div>
                <h3 className="font-weight-bold mb-3">{application.name}</h3>
                <div className="d-flex align-items-baseline">
                  <div className="text-twitter">
                    <LocationOnIcon />
                  </div>
                  <h6>
                    {application.location.street}, {application.location.city},{" "}
                    {application.location.district} ,
                    {application.location.state}, {application.location.country}
                    , PIN: {application.location.pinNumber}
                  </h6>
                </div>
              </div>
            </div>
            <div className="d-md-flex py-3 align-items-center">
              <h5 className="font-weight-bold text-twitter text-center">
                {application.professionalTitle}
              </h5>
              <a
                href={application.portfolioLink}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-twitter font-weight-bold"
              >
                {application.portfolioLink}
              </a>
            </div>
            <div>
              <p>{application.description}</p>
            </div>
            <div className="pb-3">
              {application.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-twitter font-weight-bolder px-3 mr-3 my-2"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-uppercase text-center my-3">
              <div className="font-weight-bolder h5">Resume</div>
              <PdfViewer
                url={application.resume.url}
                viewerClassName="vh-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
