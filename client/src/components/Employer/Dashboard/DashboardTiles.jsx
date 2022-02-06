import React from "react";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";

const DashboardTiles = () => {
  const [
    {
      dashboardData: { counts },
    },
  ] = useEmployerState();

  return (
    <div className="row">
      {counts.map(({ title, value }, index) => (
        <div className="col-md-3 my-3 my-md-0" key={index}>
          <div className="card bg-primary shadow-soft border-light p-2">
            <div className="card-header text-center pb-0">
              <h6 className="font-weight-bolder text-truncate text-uppercase mb-0">
                {title}
              </h6>
              <span className="d-block my-2">
                <span className="display-4 font-weight-bold text-twitter">
                  {value}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardTiles;
