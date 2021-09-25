import React, { useEffect, useState } from "react";
import CompanyDetailsInputs from "./CompanyDetailsInputs";
import JobDetailsInputs from "./JobDetailsInputs";
import Loader from "./Loader";
import JobNotFound from "./JobNotFound";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";

const EditJobForm = ({ jobId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ jobs }] = useEmployerState();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const job = jobs.find((job) => job._id === jobId);

  const initialState = {
    title: job && job.title,
    designation: job && job.designation,
    type: job && job.type,
    qualification: job && job.qualification,
    experience: job && job.experience,
    salary: job && job.salary,
    languages: job && job.languages.toString(),
    skills: job && job.skills.toString(),
    companyName: job && job.companyName,
    description: job && job.description,
    companyLogo: job && job.companyLogo,
    newLogo: null,
    location: job && job.location,
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return job ? (
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
  ) : (
    <JobNotFound />
  );
};

export default EditJobForm;
