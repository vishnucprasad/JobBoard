import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "./Loader";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label for="exampleInputIcon3">Your email</label>
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text text-twitter">
              <EmailIcon />
            </span>
          </div>
          <input
            className="form-control"
            id="exampleInputIcon3"
            placeholder="Email"
            type="text"
            aria-label="email adress"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-group">
          <label for="exampleInputPassword6">Password</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <LockIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="exampleInputPassword6"
              placeholder="Password"
              type="password"
              aria-label="Password"
              required
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn-block btn-primary">
          Sign in
        </button>
      )}
    </form>
  );
};

export default LoginForm;
