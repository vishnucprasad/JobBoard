import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PdfViewer from "../../../config/PdfViewer/PdfViewer";

const ResumeDetails = ({ request }) => {
  return (
    <div className="resume-list">
      <div className="card bg-primary">
        <div className="card-body shadow-inset rounded">
          <div className="shadow-soft rounded p-4">
            <div className="d-md-flex pb-3 border-bottom border-twitter">
              <div>
                <img
                  src={request.photo.url}
                  alt=""
                  className="img-fluid company-logo mr-md-4 mb-4 mb-md-0"
                />
              </div>
              <div>
                <h3 className="font-weight-bold mb-3">{request.name}</h3>
                <div className="d-flex align-items-baseline">
                  <div className="text-twitter">
                    <LocationOnIcon />
                  </div>
                  <h6>
                    {request.location.street}, {request.location.city},{" "}
                    {request.location.district} ,{request.location.state},{" "}
                    {request.location.country}, PIN:{" "}
                    {request.location.pinNumber}
                  </h6>
                </div>
              </div>
            </div>
            <div className="d-md-flex py-3 align-items-center">
              <h5 className="font-weight-bold text-twitter text-center">
                {request.professionalTitle}
              </h5>
              <a
                href={request.portfolioLink}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-twitter font-weight-bold"
              >
                {request.portfolioLink}
              </a>
            </div>
            <div>
              <p>{request.description}</p>
            </div>
            <div className="pb-3">
              {request.skills.map((skill, index) => (
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
              <PdfViewer url={request.resume.url} viewerClassName="vh-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetails;
