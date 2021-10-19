import React from "react";

const JobNotFound = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-6 mb-5 mb-lg-0">
        <div className="card bg-primary shadow-soft border-light">
          <div className="row no-gutters align-items-center">
            <div className="card-body text-center pb-0">
              <h3 className="h3 text-twitter font-weight-bold">
                Cannot find a job.
              </h3>
              <h6 className="my-4">
                Try a different search term or try to pick a different date
                range
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobNotFound;
