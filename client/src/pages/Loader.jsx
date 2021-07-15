import React from "react";

const Loading = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="shadow-soft rounded p-2">
              <div className="row no-gutters justify-content-center">
                <div>
                  <div className="row justify-content-center p-3">
                    <div className="loader">
                      <span></span>
                    </div>
                  </div>
                  <h4 className="font-weight-bolder text-twitter text-center">
                    App is Loading!
                  </h4>
                  <h6 className="text-tertiary text-center">
                    Please Wait a moment
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
