import React from "react";
import { getCategories } from "../../../config/categories/categories";
import { useFiltersState } from "../../../contexts/FiltersStateProvider";
import { filtersActionTypes } from "../../../reducers/filters";
import CategoryIcon from "@material-ui/icons/Category";

const CategoryList = () => {
  const categories = getCategories();
  const [, dispatch] = useFiltersState();

  const onCategoryChange = (e) => {
    dispatch({
      type: filtersActionTypes.SET_CATEGORY,
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
          <option value="" selected="selected" disabled="disabled">
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
