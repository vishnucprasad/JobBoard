import React from "react";
import { getCategories } from "../../../config/categories/categories";

const CategoryList = ({ state, setState }) => {
  const categories = getCategories();

  return (
    <div className="form-group">
      <label
        className="text-twitter font-weight-bolder"
        htmlFor="categorySelect"
      >
        Select Category
      </label>
      <div className="input-group mb-4">
        <select
          className="custom-select"
          id="categorySelect"
          onChange={(e) => setState({ ...state, category: e.target.value })}
        >
          <option value="" selected="selected" disabled="disabled">
            -- Select one --
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
