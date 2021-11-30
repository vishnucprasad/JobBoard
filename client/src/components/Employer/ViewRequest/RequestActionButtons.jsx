import React from "react";
import { saveAs } from "file-saver";

const RequestActionButtons = ({ request }) => {
  const downloadResume = ({ name, url, filename }) =>
    saveAs(url, `${name}-${filename}`);

  return request.status === "Applied" ? (
    <div className="row">
      <div className="col-md-4">
        <button className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mb-3 mb-md-0">
          Approve
        </button>
      </div>
      <div className="col-md-4">
        <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mb-3 mb-md-0">
          Reject
        </button>
      </div>
      <div className="col-md-4">
        <button
          onClick={() =>
            downloadResume({
              name: request.name,
              ...request.resume,
            })
          }
          className="btn btn-primary btn-sm btn-block text-slack text-uppercase font-weight-bold"
        >
          Download Resume
        </button>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-6">
        <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mb-3 mb-md-0">
          Delete
        </button>
      </div>
      <div className="col-md-6">
        <button
          onClick={() =>
            downloadResume({
              name: request.name,
              ...request.resume,
            })
          }
          className="btn btn-primary btn-sm btn-block text-slack text-uppercase font-weight-bold"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default RequestActionButtons;
