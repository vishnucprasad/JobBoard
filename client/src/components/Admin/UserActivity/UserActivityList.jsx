import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const UserActivityList = () => {
  const columns = [
    { field: "id", headerName: "ID", headerClassName: "bg-light" },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "lastApplyed",
      headerName: "Last Applyed",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 2,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 3,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 4,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 5,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 6,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
    {
      id: 7,
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      lastApplyed: "2021-05-08",
      status: "Approved",
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Users</div>
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

export default UserActivityList;
