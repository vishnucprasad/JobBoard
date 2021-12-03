import React from "react";
import { Link } from "react-router-dom";
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
        <Link
          to={`/employer/approved-requests/schedule/${request._id}`}
          className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3"
        >
          Schedule Meeting
        </Link>
        <button className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3">
          Mark As Appointed
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
