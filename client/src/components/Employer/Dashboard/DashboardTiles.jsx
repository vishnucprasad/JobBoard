import React from "react";

const DashboardTiles = () => {
  const tiles = [
    { title: "Jobs", value: 40 },
    { title: "Resume Requests", value: 44 },
    { title: "Approved Requests", value: 14 },
    { title: "Rejected Requests", value: 20 },
  ];

  return (
    <div className="row">
      {tiles.map(({ title, value }, index) => (
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
