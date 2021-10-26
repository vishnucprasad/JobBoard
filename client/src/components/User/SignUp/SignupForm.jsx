import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "./Loader";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const initialState = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmedPassword: "",
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label htmlFor="NameInput">Name</label>
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text text-twitter">
              <PersonIcon />
            </span>
          </div>
          <input
            className="form-control"
            id="NameInput"
            placeholder="Name"
            type="text"
            aria-label="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <div className="input-group mb-4">
          <PhoneInput
            country={"in"}
            onChange={(phone) => setState({ ...state, mobile: `+${phone}` })}
            containerClass="form-control p-0"
            inputClass="phoneinput-input"
            buttonClass="phoneinput-button px-1"
            dropdownClass="phoneinput-dropdown"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="EmailInput">Email</label>
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text text-twitter">
              <EmailIcon />
            </span>
          </div>
          <input
            className="form-control"
            id="EmailInput"
            placeholder="Email"
            type="email"
            aria-label="email adress"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="PasswordInput">Password</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <LockIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="PasswordInput"
              placeholder="Password"
              type="password"
              aria-label="Password"
              required
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="RePasswordInput">Re-Type Password</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <LockIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="RePasswordInput"
              placeholder="Re-Type Password"
              type="password"
              aria-label="Re-Type Password"
              required
              value={state.confirmedPassword}
              onChange={(e) =>
                setState({ ...state, confirmedPassword: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn-block btn-primary">
          Sign up
        </button>
      )}
    </form>
  );
};

export default SignupForm;
