import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const QuickContact = () => {
  return (
    <div>
      <div className="card-header">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center mb-5">
            <h1 className="display-3 mb-3 text-twitter font-weight-bold">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-4 col-lg-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                <span className="text-twitter">
                  <LocationOnIcon />
                </span>
              </div>
              <h2 className="h5 icon-box-title">Visit us</h2>
              <span>
                Infopark Short Road,
                <br />
                Kochi, Kerala, India
              </span>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                <span className="text-twitter">
                  <PhoneInTalkIcon />
                </span>
              </div>
              <h2 className="h5 icon-box-title">Call</h2>
              <span>+910000000000</span>
              <div className="text-small text-gray">Mon - Fri, 8am - 4pm</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center">
            <div className="icon-box mb-4">
              <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                <span className="text-twitter">
                  <ContactMailIcon />
                </span>
              </div>
              <h2 className="h5 icon-box-title">Email</h2>
              <a href="mailto:contact@jobboard.com">contact@jobboard.com</a>
              <br />
              <a href="mailto:enquiries@jobboard.com">enquiries@jobboard.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
