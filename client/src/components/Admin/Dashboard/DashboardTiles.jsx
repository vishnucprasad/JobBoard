import React from "react";

const DashboardTiles = () => {
  const tiles = [
    { title: "Users", value: 40 },
    { title: "Jobs", value: 44 },
    { title: "Employers", value: 14 },
    { title: "Enquiries", value: 20 },
  ];

  return (
    <div className="row">
      {tiles.map(({ title, value }, index) => (
        <div className="col-md-3 my-3 my-md-0" key={index}>
          <div className="card bg-primary shadow-soft border-light">
            <div className="card-header text-center pb-0">
              <h4 className="font-weight-bolder text-twitter text-truncate mb-0">
                {title}
              </h4>
              <span className="d-block my-2">
                <span className="display-3 font-weight-bold text-slack">
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
