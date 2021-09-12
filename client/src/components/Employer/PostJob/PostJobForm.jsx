import React, { useEffect, useState } from "react";
import CompanyDetailsInputs from "./CompanyDetailsInputs";
import JobDetailsInputs from "./JobDetailsInputs";
import Loader from "./Loader";

const PostJobForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const initialState = {
    title: "",
    designation: "",
    type: "Full-Time",
    qualification: "",
    companyName: "",
    companyLogo: null,
    location: {
      street: "",
      city: "",
      state: "",
      country: "",
      pinNumber: "",
    },
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
          <form onSubmit={handleSubmit} className="postJobForm mt-4">
            <CompanyDetailsInputs state={state} setState={setState} />
            <JobDetailsInputs state={state} setState={setState} />
            {isLoading ? (
              <Loader />
            ) : (
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-7">
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;
