import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

const ContactForm = () => {
  return (
    <div>
      <form className="col-12 col-md-8 mx-auto">
        <div className="form-group">
          <label for="nameInputIcon2">Your Name</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="text-twitter">
                  <PersonIcon />
                </span>
              </span>
            </div>
            <input
              className="form-control"
              id="nameInputIcon2"
              placeholder="Name"
              type="text"
              aria-label="contact name input"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="emailInputIcon2">Your Email</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="text-twitter">
                  <MailIcon />
                </span>
              </span>
            </div>
            <input
              className="form-control"
              id="emailInputIcon2"
              placeholder="Email"
              type="email"
              aria-label="contact email input"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea2">Your Message</label>
          <textarea
            className="form-control"
            placeholder="Enter your message..."
            id="exampleFormControlTextarea2"
            rows="4"
          ></textarea>
        </div>
      </form>
      <div className="text-center px-0 mx-auto">
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
