import React from "react";

const Loader = () => {
  return (
    <div className=" text-center py-2 rounded text-twitter">
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default Loader;
