import React from "react";
import { getSubCategories } from "../../../config/categories/categories";

const CategoryList = ({ state, setState }) => {
  const subCategories = state.category ? getSubCategories(state.category) : [];

  return (
    <div className="form-group">
      <label
        className="text-twitter font-weight-bolder"
        htmlFor="subCategorySelect"
      >
        Select Sub Category
      </label>
      <div className="input-group mb-4">
        <select
          className="custom-select"
          id="subCategorySelect"
          onChange={(e) => setState({ ...state, subCategory: e.target.value })}
        >
          <option value={state.subCategory} selected="selected" hidden>
            {state.subCategory}
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
