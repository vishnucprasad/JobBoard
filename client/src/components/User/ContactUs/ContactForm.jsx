import React, { useState } from "react";
import moment from "moment";
import PersonIcon from "@material-ui/icons/Person";
import SubjectIcon from "@material-ui/icons/Subject";
import MailIcon from "@material-ui/icons/Mail";
import Loader from "./Loader";
import Axios from "../../../axios/axios";
import { Toast } from "../../../config/sweetalert/swal";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Axios.post("/enquiry", { ...state, createdAt: moment().valueOf() })
      .then((response) => {
        if (response.data.errors) {
          Toast.fire({
            title: response.data._message,
            icon: "error",
          });
        } else {
          Toast.fire({
            title: "Successfully send your message to the JobBoard admin.",
            icon: "success",
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        Toast.fire({
          title: "Something went wrong, Please try again",
          icon: "error",
        });
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form className="col-12 col-md-8 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInputIcon2">Your Name</label>
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
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              aria-label="contact name input"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="emailInputIcon2">Your Email</label>
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
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              aria-label="contact email input"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="nameInputIcon2">Your Subject</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="text-twitter">
                  <SubjectIcon />
                </span>
              </span>
            </div>
            <input
              className="form-control"
              id="nameInputIcon2"
              placeholder="Subject"
              type="text"
              value={state.subject}
              onChange={(e) => setState({ ...state, subject: e.target.value })}
              aria-label="contact name input"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea2">Your Message</label>
          <textarea
            className="form-control"
            placeholder="Enter your message..."
            id="exampleFormControlTextarea2"
            rows="4"
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="text-center px-0 mx-auto">
          {isLoading ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
