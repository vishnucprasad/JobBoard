import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import WcIcon from "@material-ui/icons/Wc";
import Loader from "./Loader";
import { useAuthState } from "../../../contexts/AuthStateProvider";

const EditPersonalInfo = () => {
  const [{ auth }] = useAuthState();

  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    email: auth.email ? auth.email : "",
    name: auth.name ? auth.name : "",
    gender: auth.gender ? auth.gender : "",
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="shadow-soft rounded p-3 mb-4">
      <h6>Personal Info</h6>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <EmailIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="emailInput"
              placeholder="Email"
              type="text"
              aria-label="email adress"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <PersonIcon />
              </span>
            </div>
            <input
              className="form-control"
              id="nameInput"
              placeholder="Name"
              type="text"
              aria-label="Name"
              required
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="my-1 mr-2" htmlFor="genderSelect">
            Gender
          </label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text text-twitter">
                <WcIcon />
              </span>
            </div>
            <select
              className="custom-select"
              id="genderSelect"
              value={state.gender}
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn-block btn-sm btn-primary">
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default EditPersonalInfo;
