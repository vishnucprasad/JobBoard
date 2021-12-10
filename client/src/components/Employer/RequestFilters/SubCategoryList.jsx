import React from "react";
import { getSubCategories } from "../../../config/categories/categories";
import CategoryIcon from "@material-ui/icons/Category";
import { useEmployerFiltersState } from "../../../contexts/EmployerFiltersStateProvider";
import { employerFiltersActionTypes } from "../../../reducers/employerFilters";

const CategoryList = () => {
  const [{ category }, dispatch] = useEmployerFiltersState();
  const subCategories = category ? getSubCategories(category) : [];

  const onSubCategoryChange = (e) => {
    dispatch({
      type: employerFiltersActionTypes.SET_SUBCATEGORY,
      subCategory: e.target.value,
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
          id="subCategorySelect"
          onChange={onSubCategoryChange}
        >
          <option value="" selected="selected">
            -- Select Sub Category --
          </option>
          {subCategories &&
            subCategories.map((subCategory) => (
              <option value={subCategory}>{subCategory}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryList;
