import React from "react";
import { saveAs } from "file-saver";
import { employerInstance } from "../../../axios/axios";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import MySwal, { Toast } from "../../../config/sweetalert/swal";

const ActionButtons = ({ request }) => {
  const [, dispatch] = useEmployerState();

  const downloadResume = ({ name, url, filename }) =>
    saveAs(url, `${name}-${filename}`);

  const approveResume = (resumeId) => {
    MySwal.fire({
      title: "Are you sure you want to approve this resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Approve",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .post("/resume/approve", { resumeId })
          .then(({ data }) => {
            if (data.status === "Approved") {
              dispatch({
                type: employerActionTypes.UPDATE_RESUMES,
                resumeId,
                updates: {
                  status: data.status,
                },
              });
              Toast.fire({
                title: "Successfully Approved",
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

  const rejectResume = (resumeId) => {
    MySwal.fire({
      title: "Are you sure you want to reject this resume?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Reject",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        employerInstance
          .post("/resume/reject", { resumeId })
          .then(({ data }) => {
            if (data.status === "Rejected") {
              dispatch({
                type: employerActionTypes.UPDATE_RESUMES,
                resumeId,
                updates: {
                  status: data.status,
                },
              });
              Toast.fire({
                title: "Successfully Rejected",
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
        <button
          className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3"
          onClick={() => approveResume(request._id)}
        >
          Approve
        </button>
        <button
          className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3"
          onClick={() => rejectResume(request._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
