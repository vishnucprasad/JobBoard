import React, { useEffect, useState } from "react";
import CompanyDetailsInputs from "./CompanyDetailsInputs";
import JobDetailsInputs from "./JobDetailsInputs";
import Loader from "./Loader";
import { employerInstance } from "../../../axios/axios";

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
    experience: "",
    languages: "",
    skills: "",
    companyName: "",
    description: "",
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

    const formData = new FormData();

    formData.append("companyName", state.companyName);
    formData.append("location", JSON.stringify(state.location));
    formData.append("companyLogo", state.companyLogo, state.companyLogo.name);
    formData.append("title", state.title);
    formData.append("designation", state.designation);
    formData.append("type", state.type);
    formData.append("qualification", state.qualification);
    formData.append("experience", state.experience);
    formData.append("languages", state.languages);
    formData.append("skills", state.skills);
    formData.append("description", state.description);

    employerInstance.post("/jobs/post", formData).then((response) => {
      console.log(response.data);
      setIsLoading(false);
    });
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
