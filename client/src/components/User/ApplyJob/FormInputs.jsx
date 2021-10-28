import React from "react";

const FormInputs = ({ state, setState }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="nameInput"
          >
            Your Name
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="nameInput"
              placeholder="Name"
              type="text"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="emailInput"
          >
            Your Email
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="emailInput"
              placeholder="Email"
              type="text"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="titleInput"
          >
            Professional Title
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="titleInput"
              placeholder="Professional Title"
              type="text"
              value={state.professionalTitle}
              onChange={(e) =>
                setState({ ...state, professionalTitle: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="portfolioInput"
          >
            Website / Portfolio Link
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="portfolioInput"
              placeholder="Portfolio Link"
              type="text"
              value={state.portfolioLink}
              onChange={(e) =>
                setState({ ...state, portfolioLink: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="streetInput"
          >
            Street
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="streetInput"
              placeholder="Street"
              type="text"
              value={state.location.street}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    street: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="cityInput"
          >
            City
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="cityInput"
              placeholder="City"
              type="text"
              value={state.location.city}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    city: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="districtInput"
          >
            District
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="districtInput"
              placeholder="District"
              type="text"
              value={state.location.district}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    district: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="stateInput"
          >
            State
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="stateInput"
              placeholder="State"
              type="text"
              value={state.location.state}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    state: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="countryInput"
          >
            Country
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="countryInput"
              placeholder="Country"
              type="text"
              value={state.location.country}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    country: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label className="text-twitter font-weight-bolder" htmlFor="pinInput">
            PIN Number
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="pinInput"
              placeholder="PIN Number"
              type="text"
              value={state.location.pinNumber}
              onChange={(e) =>
                setState({
                  ...state,
                  location: {
                    ...state.location,
                    pinNumber: e.target.value,
                  },
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="skillsInput"
          >
            Skills{" "}
            <span className="font-weight-normal">
              (Seperate skills with commas)
            </span>
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="skillsInput"
              placeholder="Skills"
              type="text"
              value={state.skills}
              onChange={(e) => setState({ ...state, skills: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="descriptionInput"
          >
            Describe Yourself
          </label>
          <div className="input-group mb-4">
            <textarea
              className="form-control"
              id="descriptionInput"
              rows="5"
              placeholder="Describe Yourself"
              value={state.description}
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;
