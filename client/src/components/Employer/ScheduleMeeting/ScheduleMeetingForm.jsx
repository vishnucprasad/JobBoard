import React, { useEffect, useState } from "react";
import moment from "moment";
import Loader from "./Loader";
import ScheduleMeetingInputs from "./ScheduleMeetingInputs";

const ScheduleMeetingForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const initialState = {
    calenderFocused: false,
    meetingType: "online meeting",
    time: moment().format("HH:mm"),
    meetingLink: null,
    locationLink: null,
    message: "",
  };
  const [state, setState] = useState(initialState);
  const [date, setDate] = useState(moment());

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
