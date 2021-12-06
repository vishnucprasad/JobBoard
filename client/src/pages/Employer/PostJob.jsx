import React from "react";
import PostJobForm from "../../components/Employer/PostJob/PostJobForm";

const PostJob = () => {
  return (
    <div>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Post a Job</span>
        </h6>
      </div>
      <PostJobForm />
    </div>
  );
};

export default PostJob;
