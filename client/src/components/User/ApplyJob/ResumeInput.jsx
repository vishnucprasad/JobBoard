import React from "react";
import PdfViewer from "../../../config/PdfViewer/PdfViewer";

const ResumeInput = ({ state, setState }) => {
  return (
    <div className="col-md-6">
      <div className="mb-4">
        <label
          className="text-twitter font-weight-bolder"
          htmlFor="resumeInput"
        >
          Resume
        </label>
        <div id="resumeInput">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input d-none"
              id="resumeFile"
              accept=".pdf"
              onChange={(e) =>
                setState({ ...state, resume: e.target.files[0] })
              }
              required
            />
            <label
              className="custom-file-label formResume shadow-inset"
              htmlFor="resumeFile"
            >
              {state.resume ? (
                <div className="resume">
                  <PdfViewer url={URL.createObjectURL(state.resume)} />
                </div>
              ) : (
                <h5 className="text-twitter font-weight-bold">
                  Select Resume File
                </h5>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeInput;
