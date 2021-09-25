import React from "react";

const CompanyDetailsInputs = ({ state, setState }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="companyNameInput"
          >
            Company name
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="companyNameInput"
              placeholder="Company"
              type="text"
              value={state.companyName}
              onChange={(e) =>
                setState({ ...state, companyName: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="companyLogoInput"
          >
            Company Logo
          </label>
          <div id="companyLogoInput">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input d-none"
                id="customFile"
                onChange={(e) =>
                  setState({ ...state, newLogo: e.target.files[0] })
                }
              />
              <label
                className="custom-file-label formLogo shadow-inset"
                htmlFor="customFile"
              >
                <img
                  src={
                    state.newLogo
                      ? URL.createObjectURL(state.newLogo)
                      : state.companyLogo.url
                  }
                  alt=""
                  className="image-fluid"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="streetInput"
          >
            Company location
          </label>
          <div id="streetInput">
            <div className="input-group mb-4">
              <input
                className="form-control"
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
            <div className="input-group mb-4">
              <input
                className="form-control"
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
            <div className="input-group mb-4">
              <input
                className="form-control"
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
            <div className="input-group mb-4">
              <input
                className="form-control"
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
            <div className="input-group mb-4">
              <input
                className="form-control"
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
      </div>
    </div>
  );
};

export default CompanyDetailsInputs;
