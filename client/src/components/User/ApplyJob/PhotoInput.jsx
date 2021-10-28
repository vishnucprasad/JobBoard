import React from "react";
import defaultPhoto from "../../../images/user-icon.png";

const PhotoInput = ({ state, setState }) => {
  return (
    <div className="col-md-6">
      <div className="mb-4">
        <label className="text-twitter font-weight-bolder" htmlFor="photoInput">
          Photo
        </label>
        <div id="photoInput">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input d-none"
              id="customFile"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setState({ ...state, photo: e.target.files[0] })}
              required
            />
            <label
              className="custom-file-label formPhoto shadow-inset"
              htmlFor="customFile"
            >
              <img
                src={
                  state.photo ? URL.createObjectURL(state.photo) : defaultPhoto
                }
                alt=""
                className="image-fluid"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoInput;
