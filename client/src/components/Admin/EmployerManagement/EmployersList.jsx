import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const EmployersList = () => {
  const columns = [
    { field: "id", headerName: "ID", headerClassName: "bg-light" },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-light",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "bg-light",
      width: 250,
    },
    {
      field: "bussinessName",
      headerName: "Bussiness Name",
      headerClassName: "bg-light",
      width: 200,
    },
    {
      field: "employerId",
      headerName: "Details",
      headerClassName: "bg-light",
      width: 175,
      renderCell: (params) => (
        <Link
          to={`/admin/employer-management/view/${params.value}`}
          className="btn btn-primary btn-sm btn-block font-weight-bold p-0"
        >
          View
        </Link>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 2,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 3,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 4,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 5,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 6,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 7,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      bussinessName: "Nodesters",
      employerId: "dgkjsvfbliuhblfuglshf",
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Employers</div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3">
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployersList;
