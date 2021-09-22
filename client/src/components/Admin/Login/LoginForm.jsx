import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Loader from "./Loader";
import { adminInstance } from "../../../axios/axios";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { actionTypes } from "../../../reducers/auth";
import { Toast } from "../../../config/sweetalert/swal";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const [, dispatch] = useAuthState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    adminInstance
      .post("/login", state)
      .then((response) => {
        dispatch({
          type: actionTypes.LOGIN,
          auth: response.data.user,
        });
        setIsLoading(false);
        Toast.fire({
          title: "Successfully logged in",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setIsLoading(false);
          Toast.fire({
            title: error.response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
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
            type="text"
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
