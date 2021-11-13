import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import WcIcon from "@material-ui/icons/Wc";
import PhoneInput from "react-phone-input-2";
import Loader from "./Loader";
import { useAuthState } from "../../../contexts/AuthStateProvider";
import { authActionTypes } from "../../../reducers/auth";
import Axios from "../../../axios/axios";
import { Toast } from "../../../config/sweetalert/swal";

const EditPersonalInfo = () => {
  const [{ auth }, dispatch] = useAuthState();

  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    email: auth.email ? auth.email : "",
    mobile: auth.mobile ? auth.mobile : "",
    name: auth.name ? auth.name : "",
    gender: auth.gender ? auth.gender : "",
    description: auth.description ? auth.description : "",
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Axios.patch("/profile/update/info", state)
      .then((response) => {
        dispatch({
          type: authActionTypes.UPDATE_AUTH,
          updates: state,
        });
        Toast.fire({
          title: "Saved successfully",
          icon: "success",
        });
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
              required
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
          <label>Mobile Number</label>
          <div className="input-group mb-4">
            <PhoneInput
              country={"in"}
              value={state.mobile}
              onChange={(phone) => setState({ ...state, mobile: `+${phone}` })}
              containerClass="form-control p-0"
              inputClass="phoneinput-input"
              buttonClass="phoneinput-button px-1"
              dropdownClass="phoneinput-dropdown"
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
              required
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="descriptionInput"
          >
            Description
          </label>
          <div className="input-group mb-4">
            <textarea
              className="form-control"
              id="descriptionInput"
              rows="3"
              placeholder="Describe your self"
              value={state.description}
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
            ></textarea>
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
