import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { DateRangePicker } from "react-dates";
import { useFiltersState } from "../../../contexts/FiltersStateProvider";
import { filtersActionTypes } from "../../../reducers/filters";

const FindJobFilters = () => {
  const [{ search, location, startDate, endDate }, dispatch] =
    useFiltersState();
  const [calenderFocused, setCalenderFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch({
      type: filtersActionTypes.SET_START_DATE,
      startDate,
    });
    dispatch({
      type: filtersActionTypes.SET_END_DATE,
      endDate,
    });
  };

  const onFocusChange = (calenderFocused) => {
    setCalenderFocused(calenderFocused);
  };

  const onSearchChange = (e) => {
    dispatch({
      type: filtersActionTypes.SET_CATEGORY,
      search: e.target.value,
    });
  };

  const onLocationChange = (e) => {
    dispatch({
      type: filtersActionTypes.SET_LOCATION,
      location: e.target.value,
    });
  };

  return (
    <div className="py-4">
      <h4>Find Jobs, Employment &amp; Career Opertunities</h4>
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 my-2 my-md-0">
              <DateRangePicker
                startDate={startDate}
                startDateId="startDate"
                endDate={endDate}
                endDateId="endDate"
                onDatesChange={onDatesChange}
                focusedInput={calenderFocused}
                onFocusChange={onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
            <div className="col-md-4 my-2 my-md-0">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <SearchIcon className="text-twitter" />
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Search"
                  type="text"
                  autoFocus
                  value={search}
                  onChange={onSearchChange}
                />
              </div>
            </div>
            <div className="col-md-4 my-2 my-md-0">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <LocationSearchingIcon className="text-twitter" />
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Search Location"
                  type="text"
                  value={location}
                  onChange={onLocationChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobFilters;
