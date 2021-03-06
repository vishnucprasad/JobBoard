import React, { useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "./Loader";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    password: "",
    newPassword: "",
    confirmedPassword: "",
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="shadow-soft rounded p-3">
      <h6>Change Password</h6>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="currentPasswordInput">Current Password</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <LockIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="currentPasswordInput"
              placeholder="Current Password"
              type="password"
              aria-label="password"
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="newPasswordInput">New Password</label>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text text-twitter">
                  <LockIcon />
                </span>
              </div>
              <input
                className="form-control"
                id="newPasswordInput"
                placeholder="New Password"
                type="password"
                aria-label="New Password"
                required
                value={state.newPassword}
                onChange={(e) =>
                  setState({ ...state, newPassword: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="confirmedPasswordInput">Confirm Password</label>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text text-twitter">
                  <LockIcon />
                </span>
              </div>
              <input
                className="form-control"
                id="confirmedPasswordInput"
                placeholder="Confirm Password"
                type="password"
                aria-label="Confirm Password"
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
          <button type="submit" className="btn btn-block btn-sm btn-primary">
            Change Password
          </button>
        )}
      </form>
    </div>
  );
};

export default ChangePassword;
