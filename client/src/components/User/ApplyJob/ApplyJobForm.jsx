import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import FormInputs from "./FormInputs";
import Loader from "./Loader";
import PhotoInput from "./PhotoInput";
import ResumeInput from "./ResumeInput";
import Axios from "../../../axios/axios";
import { Toast } from "../../../config/sweetalert/swal";

const ApplyJobForm = ({ jobId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

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

    const formData = new FormData();

    formData.append("jobId", state.jobId);
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("professionalTitle", state.professionalTitle);
    formData.append("portfolioLink", state.portfolioLink);
    formData.append("location", JSON.stringify(state.location));
    formData.append("skills", state.skills);
    formData.append("description", state.description);
    formData.append("photo", state.photo, state.photo.name);
    formData.append("resume", state.resume, state.resume.name);
    formData.append("createdAt", moment().valueOf());

    Axios.post("/job/apply", formData)
      .then(({ data }) => {
        setIsLoading(false);

        Toast.fire({
          title: "Application submitted successfully",
          icon: "success",
        });

        history.push(`/user/application/view/${data._id}`);
      })
      .catch((error) => {
        setIsLoading(false);

        Toast.fire({
          title: "Something went wrong, Please try again",
          icon: "error",
        });
      });
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
