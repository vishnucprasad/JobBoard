import React from "react";
import { useParams } from "react-router-dom";
import ScheduleMeetingForm from "../../components/Employer/ScheduleMeeting/ScheduleMeetingForm";

const ScheduleMeeting = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Schedule Meeting</span>
        </h6>
      </div>
      <ScheduleMeetingForm resumeId={id} />
    </div>
  );
};

export default ScheduleMeeting;
