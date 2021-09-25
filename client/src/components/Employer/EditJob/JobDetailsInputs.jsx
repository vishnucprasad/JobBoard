import React from "react";

const JobDetailsInputs = ({ state, setState }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="titleInput"
          >
            Job Title
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="titleInput"
              placeholder="Title"
              type="text"
              value={state.title}
              onChange={(e) => setState({ ...state, title: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="designationInput"
          >
            Job Designation
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="designationInput"
              placeholder="Designation"
              type="text"
              value={state.designation}
              onChange={(e) =>
                setState({ ...state, designation: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="typeSelect"
          >
            Job Type
          </label>
          <div className="input-group mb-4">
            <select
              className="custom-select"
              id="typeSelect"
              onChange={(e) => setState({ ...state, type: e.target.value })}
            >
              {state.type && (
                <option value={state.type} hidden>
                  {state.type}
                </option>
              )}
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="qualificationInput"
          >
            Qualification
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="qualificationInput"
              placeholder="Qualification"
              type="text"
              value={state.qualification}
              onChange={(e) =>
                setState({ ...state, qualification: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="experienceInput"
          >
            Experience Required
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="experienceInput"
              placeholder="Experience Required"
              type="text"
              value={state.experience}
              onChange={(e) =>
                setState({ ...state, experience: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="salaryInput"
          >
            Salary
            <span className="font-weight-normal">(in $ LPA)</span>
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="salaryInput"
              placeholder="Salary"
              type="text"
              value={state.salary}
              onChange={(e) => {
                const salary = e.target.value;

                if (!salary || salary.match(/^\d{1,}(\.\d{0,2})?$/)) {
                  setState({ ...state, salary });
                }
              }}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="languagesInput"
          >
            Languages Required
            <span className="font-weight-normal">
              (Seperate languages with commas)
            </span>
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="languagesInput"
              placeholder="Languages Required"
              type="text"
              value={state.languages}
              onChange={(e) =>
                setState({ ...state, languages: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="skillsInput"
          >
            Skils Required
            <span className="font-weight-normal">
              (Seperate skills with commas)
            </span>
          </label>
          <div className="input-group mb-4">
            <input
              className="form-control"
              id="skillsInput"
              placeholder="Skills Required"
              type="text"
              value={state.skills}
              onChange={(e) => setState({ ...state, skills: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-group">
          <label
            className="text-twitter font-weight-bolder"
            htmlFor="descriptionInput"
          >
            Description
          </label>
          <div className="input-group mb-4">
            <textarea
              className="form-control"
              id="descriptionInput"
              rows="5"
              placeholder="Job Description"
              value={state.description}
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsInputs;
