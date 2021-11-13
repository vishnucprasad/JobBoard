import React from "react";
import { useHistory } from "react-router-dom";

const NoApplicationsFound = () => {
  const history = useHistory();

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="col-12 col-lg-6 mb-5 mb-lg-0">
        <div className="card bg-primary shadow-soft border-light">
          <div className="row no-gutters align-items-center">
            <div className="card-body pb-0 text-center">
              <h3 className="h3 text-danger font-weight-bold">
                There is no applicaions to show!
              </h3>
              <h5 className="h5 font-weight-bold my-3">
                Apply for jobs to see applications here
              </h5>
              <h6 className="font-weight-bold my-2">
                Now you should take a step back.
              </h6>
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

export default NoApplicationsFound;
