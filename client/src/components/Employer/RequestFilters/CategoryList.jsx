import React from "react";
import { getCategories } from "../../../config/categories/categories";
import { employerFiltersActionTypes } from "../../../reducers/employerFilters";
import CategoryIcon from "@material-ui/icons/Category";
import { useEmployerFiltersState } from "../../../contexts/EmployerFiltersStateProvider";

const CategoryList = () => {
  const categories = getCategories();
  const [, dispatch] = useEmployerFiltersState();

  const onCategoryChange = (e) => {
    dispatch({
      type: employerFiltersActionTypes.SET_CATEGORY,
      category: e.target.value,
    });
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <CategoryIcon className="text-twitter" />
          </span>
        </div>
        <select
          className="custom-select"
          id="categorySelect"
          onChange={onCategoryChange}
        >
          <option value="" selected="selected">
            -- Select Category --
          </option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryList;
