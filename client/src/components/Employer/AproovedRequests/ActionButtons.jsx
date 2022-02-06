import React from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import { employerInstance } from "../../../axios/axios";
import MySwal, { Toast } from "../../../config/sweetalert/swal";

const ActionButtons = ({ request }) => {
  const [, dispatch] = useEmployerState();

  const downloadResume = ({ name, url, filename }) =>
    saveAs(url, `${name}-${filename}`);

  const appointResume = (resumeId) => {
    MySwal.fire({
      title: "Are you sure you want to appoint this resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Appoint",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .post("/resume/appoint", { resumeId })
          .then(({ data }) => {
            if (data.status === "Appointed") {
              dispatch({
                type: employerActionTypes.UPDATE_RESUMES,
                resumeId,
                updates: {
                  status: data.status,
                },
              });
              Toast.fire({
                title: "Successfully Appointed",
                icon: "success",
              });
            } else {
              Toast.fire({
                title: "Something went wrong, Please try again",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            Toast.fire({
              title: "Something went wrong, Please try again",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="d-flex align-items-center">
      <div className="w-100">
        <button
          onClick={() =>
            downloadResume({
              name: request.name,
              ...request.resume,
            })
          }
          className="btn btn-primary btn-sm btn-block text-slack text-uppercase font-weight-bold mt-3"
        >
          Download Resume
        </button>
        <Link
          to={`/employer/approved-requests/schedule/${request._id}`}
          className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3"
        >
          {request.schedule ? "Reschedule Meeting" : "Schedule Meeting"}
        </Link>
        <button
          className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3"
          onClick={() => appointResume(request._id)}
        >
          Mark As Appointed
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
