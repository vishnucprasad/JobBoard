import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <section className="min-vh-100 d-flex bg-primary align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light">
              <div className="row no-gutters align-items-center">
                <div className="col-sm-5">
                  <div className="card-header text-center pb-0">
                    <h4 className="font-weight-bold mb-0">Page Not Found</h4>
                    <span className="d-block my-3">
                      <span className="display-2 font-weight-bold text-danger">
                        404
                      </span>
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary btn-block font-weight-bold mb-3"
                      onClick={() => history.goBack()}
                    >
                      &lt;&lt; Go Back
                    </button>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="card-body pb-0">
                    <h3 className="h3 text-danger font-weight-bold">Oops!</h3>
                    <h5 className="h5 font-weight-bold">
                      Maybe you should take a step back.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
