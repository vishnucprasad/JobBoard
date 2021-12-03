import React from "react";
import { SingleDatePicker } from "react-dates";

const ScheduleMeetingInputs = ({ state, setState, date, setDate }) => {
  const onDateChange = (date) => {
    if (date) {
      setDate(date);
    }
  };

  const onFocusChange = ({ focused }) => {
    setState({ ...state, calenderFocused: focused });
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="typeSelect"
          >
            Meeting Type
          </label>
          <div className="input-group mb-4">
            <select
              className="custom-select"
              id="typeSelect"
              onChange={(e) =>
                setState({
                  ...state,
                  meetingLink: null,
                  locationLink: null,
                  meetingType: e.target.value,
                })
              }
            >
              {state.meetingType && (
                <option value={state.meetingType} hidden>
                  {state.meetingType}
                </option>
              )}
              <option value="online meeting">online meeting</option>
              <option value="office interview">office interview</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="companyNameInput"
          >
            Date
          </label>
          <div
            className="input-group mb-4 p-1"
            style={{ width: "fit-content" }}
          >
            <SingleDatePicker
              date={date}
              onDateChange={onDateChange}
              focused={state.calenderFocused}
              onFocusChange={onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="timeInput"
          >
            Time
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="timeInput"
              type="time"
              value={state.time}
              onChange={(e) => setState({ ...state, time: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        {state.meetingType === "online meeting" && (
          <div className="form-group">
            <label
              className="text-twitter font-weight-bolder"
              htmlFor="meetLinkInput"
            >
              Meeting Link
            </label>
            <div className="input-group mb-4">
              <input
                className="form-control"
                id="meetLinkInput"
                placeholder="Meeting Link"
                type="text"
                value={state.meetingLink}
                onChange={(e) =>
                  setState({ ...state, meetingLink: e.target.value })
                }
              />
            </div>
          </div>
        )}
        {state.meetingType === "office interview" && (
          <div className="form-group">
            <label
              className="text-twitter font-weight-bolder"
              htmlFor="locationLinkInput"
            >
              Location Link
            </label>
            <div className="input-group mb-4">
              <input
                className="form-control"
                id="locationLinkInput"
                placeholder="Location Link"
                type="text"
                value={state.locationLink}
                onChange={(e) =>
                  setState({ ...state, locationLink: e.target.value })
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="messageInput"
          >
            Message
          </label>
          <div className="input-group mb-4">
            <textarea
              className="form-control"
              id="messageInput"
              rows="5"
              placeholder="Type your message here"
              value={state.message}
              onChange={(e) => setState({ ...state, message: e.target.value })}
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingInputs;
