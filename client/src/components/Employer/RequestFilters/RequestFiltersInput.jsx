import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import { DateRangePicker } from "react-dates";
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import { useEmployerFiltersState } from "../../../contexts/EmployerFiltersStateProvider";
import { employerFiltersActionTypes } from "../../../reducers/employerFilters";

const RequestFiltersInput = () => {
  const [{ search, sort, startDate, endDate }, dispatch] =
    useEmployerFiltersState();
  const [calenderFocused, setCalenderFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch({
      type: employerFiltersActionTypes.SET_START_DATE,
      startDate,
    });
    dispatch({
      type: employerFiltersActionTypes.SET_END_DATE,
      endDate,
    });
  };

  const onFocusChange = (calenderFocused) => {
    setCalenderFocused(calenderFocused);
  };

  const onSearchChange = (e) => {
    dispatch({
      type: employerFiltersActionTypes.SET_SEARCH,
      search: e.target.value,
    });
  };

  const onSortChange = (e) => {
    dispatch({
      type: employerFiltersActionTypes.SET_SORT,
      sort: e.target.value,
    });
  };

  return (
    <div className="py-4">
      <div className="card bg-primary shadow-inset border-light">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 my-2 mb-md-3">
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
            <div className="col-md-4 my-2 mb-md-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <SortIcon className="text-twitter" />
                  </span>
                </div>
                <select
                  className="custom-select"
                  id="categorySelect"
                  onChange={onSortChange}
                >
                  <option value={sort} selected="selected" hidden>
                    {sort}
                  </option>
                  <option value="Date" selected="selected">
                    Date
                  </option>
                  <option value="Salary" selected="selected">
                    Salary
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-4 my-2 mb-md-3">
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
            <div className="col-lg-6">
              <CategoryList />
            </div>
            <div className="col-lg-6">
              <SubCategoryList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFiltersInput;
