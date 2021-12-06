import React from "react";
import { saveAs } from "file-saver";

const ActionButtons = ({ request }) => {
  const downloadResume = ({ name, url, filename }) =>
    saveAs(url, `${name}-${filename}`);

  return (
    <div className="d-flex align-items-center">
      <div className="w-100">
        <button
          onClick={() =>
            downloadResume({
              name: request.name,
              ...request.resume,
            })
          }
          className="btn btn-primary btn-sm btn-block text-slack text-uppercase font-weight-bold mt-3"
        >
          Download Resume
        </button>
        <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
