import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import CompanyDetailsInputs from "./CompanyDetailsInputs";
import JobDetailsInputs from "./JobDetailsInputs";
import Loader from "./Loader";
import JobNotFound from "./JobNotFound";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import Axios, { employerInstance } from "../../../axios/axios";
import { Toast } from "../../../config/sweetalert/swal";

const EditJobForm = ({ jobId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ jobs }, dispatch] = useEmployerState();
  const history = useHistory();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const job = jobs.find((job) => job._id === jobId);

  const initialState = {
    _id: job && job._id,
    category: job && job.category,
    subCategory: job && job.subCategory,
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

    const formData = new FormData();

    formData.append("_id", state._id);
    formData.append("companyName", state.companyName);
    formData.append("location", JSON.stringify(state.location));
    formData.append("companyLogo", JSON.stringify(state.companyLogo));
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("title", state.title);
    formData.append("designation", state.designation);
    formData.append("type", state.type);
    formData.append("qualification", state.qualification);
    formData.append("experience", state.experience);
    formData.append("salary", state.salary);
    formData.append("languages", state.languages);
    formData.append("skills", state.skills);
    formData.append("description", state.description);
    formData.append("createdAt", moment().valueOf());
    state.newLogo &&
      formData.append("newLogo", state.newLogo, state.newLogo.name);

    employerInstance
      .patch("/jobs/update", formData)
      .then((response) => {
        if (state.newLogo) {
          Axios.delete(`/file/${state.companyLogo.id}`)
            .then((deleteRresponse) => {
              if (deleteRresponse.data.status) {
                dispatch({
                  type: employerActionTypes.UPDATE_JOB,
                  id: state._id,
                  updatedJob: response.data,
                });

                Toast.fire({
                  title: "Successfully Updated",
                  icon: "success",
                });

                history.push("/employer/job-management");
                setIsLoading(false);
              }
            })
            .catch((error) => {
              Toast.fire({
                title: "Something went wrong, Please try again",
                icon: "error",
              });
            });
        } else {
          dispatch({
            type: employerActionTypes.UPDATE_JOB,
            id: state._id,
            updatedJob: response.data,
          });

          Toast.fire({
            title: "Successfully Updated",
            icon: "success",
          });

          history.push("/employer/job-management");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        Toast.fire({
          title: "Something went wrong, Please try again",
          icon: "error",
        });

        setIsLoading(false);
      });
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
