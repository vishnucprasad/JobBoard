import React, { useState } from "react";
import FormInputs from "./FormInputs";
import Loader from "./Loader";
import PhotoInput from "./PhotoInput";
import ResumeInput from "./ResumeInput";

const ApplyJobForm = ({ jobId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    jobId,
    name: "",
    email: "",
    professionalTitle: "",
    portfolioLink: "",
    location: {
      street: "",
      city: "",
      district: "",
      state: "",
      country: "",
      pinNumber: "",
    },
    skills: "",
    description: "",
    photo: null,
    resume: null,
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-body rounded m-3 px-3 pt-3 pb-0">
          <h4 className="text-center text-twitter font-weight-bold">
            Apply for Job
          </h4>
          <form onSubmit={handleSubmit} className="applyForm mt-4">
            <FormInputs state={state} setState={setState} />
            <div className="row">
              <PhotoInput state={state} setState={setState} />
              <ResumeInput state={state} setState={setState} />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="text-center py-4">
                <button type="submit" className="btn btn-primary px-7">
                  Apply
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobForm;
