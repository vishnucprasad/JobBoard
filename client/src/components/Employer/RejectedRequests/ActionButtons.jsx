import React from "react";
import { saveAs } from "file-saver";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import { employerInstance } from "../../../axios/axios";
import MySwal, { Toast } from "../../../config/sweetalert/swal";

const ActionButtons = ({ request }) => {
  const [, dispatch] = useEmployerState();

  const downloadResume = ({ name, url, filename }) =>
    saveAs(url, `${name}-${filename}`);

  const undoRejection = (resumeId) => {
    MySwal.fire({
      title: "Are you sure you want to undo this rejected resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Undo",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .post("/resume/reject/undo", { resumeId })
          .then(({ data }) => {
            if (data.status === "Applied") {
              dispatch({
                type: employerActionTypes.UPDATE_RESUMES,
                resumeId,
                updates: {
                  status: data.status,
                },
              });
              Toast.fire({
                title: "Successfully undo rejection",
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

  const deleteResume = (resumeId) => {
    MySwal.fire({
      title: "Are you sure you want to delete this resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .delete(`/resume/${resumeId}`)
          .then(({ data }) => {
            dispatch({
              type: employerActionTypes.DELETE_RESUME,
              resumeId,
            });
            Toast.fire({
              title: "Successfully Deleted",
              icon: "success",
            });
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
        <button
          className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3"
          onClick={() => undoRejection(request._id)}
        >
          Undo Rejection
        </button>
        <button
          className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3"
          onClick={() => deleteResume(request._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
