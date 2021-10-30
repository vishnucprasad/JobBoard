import React from "react";
import { useHistory } from "react-router-dom";

const ApplicationNotFound = () => {
  const history = useHistory();

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="col-12 col-lg-6 mb-5 mb-lg-0">
        <div className="card bg-primary shadow-soft border-light">
          <div className="row no-gutters align-items-center">
            <div className="card-body pb-0">
              <h3 className="h3 text-danger font-weight-bold">Oops!</h3>
              <h5 className="h5 font-weight-bold">Cannot find Application.</h5>
              <h5 className="h5 font-weight-bold">
                Maybe you should take a step back.
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-primary btn-block font-weight-bold mb-3"
                onClick={() => history.goBack()}
              >
                &lt;&lt; Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNotFound;
