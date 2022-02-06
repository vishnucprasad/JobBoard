import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Loader from "./Loader";
import ScheduleMeetingInputs from "./ScheduleMeetingInputs";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import { employerInstance } from "../../../axios/axios";
import { Toast } from "../../../config/sweetalert/swal";

const ScheduleMeetingForm = ({ resumeId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useEmployerState();
  const history = useHistory();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const initialState = {
    meetingType: "online meeting",
    time: moment().format("HH:mm"),
    meetingLink: null,
    locationLink: null,
    message: "",
  };

  const [state, setState] = useState(initialState);
  const [calenderFocused, setCalenderFocused] = useState(false);
  const [date, setDate] = useState(moment());

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    employerInstance
      .post("/resume/approve/schedule", {
        resumeId,
        ...state,
        date: moment(date).valueOf(),
      })
      .then(({ data }) => {
        if (data.error) {
          Toast.fire({
            title: data.error,
            icon: "error",
          });
        } else {
          dispatch({
            type: employerActionTypes.UPDATE_RESUMES,
            resumeId: data._id,
            updates: {
              schedule: data.schedule,
            },
          });
          Toast.fire({
            title: "Meeting scheduled successfully.",
            icon: "success",
          });
          setIsLoading(false);
          history.push("/employer/approved-requests");
        }
      })
      .catch((error) => {
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
          <form onSubmit={onSubmit} className="postJobForm mt-4">
            <ScheduleMeetingInputs
              state={state}
              setState={setState}
              date={date}
              setDate={setDate}
              calenderFocused={calenderFocused}
              setCalenderFocused={setCalenderFocused}
            />
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

export default ScheduleMeetingForm;
