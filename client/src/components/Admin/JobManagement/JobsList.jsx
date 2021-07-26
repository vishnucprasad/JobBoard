import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const JobsList = () => {
  const columns = [
    { field: "id", headerName: "ID", headerClassName: "bg-light" },
    {
      field: "title",
      headerName: "Title",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "type",
      headerName: "Type",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "employerName",
      headerName: "Employer Name",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "jobId",
      headerName: "Details",
      headerClassName: "bg-light",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Link
          to={`/admin/job-management/view/${params.value}`}
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
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 2,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 3,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 4,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 5,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 6,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
    {
      id: 7,
      title: "Web Developer",
      type: "Full time",
      employerName: "Vishnu C Prasad",
      companyName: "Nodesters",
      jobId: "dgkjsvfbliuhblfuglshf",
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Jobs</div>
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

export default JobsList;
