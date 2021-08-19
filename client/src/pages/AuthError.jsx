import React from "react";

const AuthError = () => {
  return (
    <section className="min-vh-100 d-flex bg-primary align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light">
              <div className="card-header text-center pb-0">
                <h4 className="font-weight-bold text-danger mb-0">
                  Login Error
                </h4>
              </div>
              <div className="card-body pb-0">
                <h5 className="h5 font-weight-bold">
                  Oops! Error Logging in, Please try again.
                </h5>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary font-weight-bold px-5 my-3"
                    onClick={() => window.close()}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthError;
