import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import UserIcon from "../../../images/user-icon.png";

const EmployersList = () => {
  const employers = [
    {
      id: "dgkjsvfbliuhblfuglshf1",
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
    },
    {
      id: "dgkjsvfbliuhblfuglshf2",
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      displayPicture:
        "https://lh3.googleusercontent.com/a-/AOh14GhBd0XUn7qW2xHxlqZK-Fr7Pp8D8IVJnMHHa5VT=s96-c",
      blocked: true,
    },
    {
      id: "dgkjsvfbliuhblfuglshf3",
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
    },
    {
      id: "dgkjsvfbliuhblfuglshf4",
      name: "Vishnu",
      email: "mail@vishnucprasad.in",
      displayPicture:
        "https://lh3.googleusercontent.com/a-/AOh14GhBd0XUn7qW2xHxlqZK-Fr7Pp8D8IVJnMHHa5VT=s96-c",
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Employers</div>
            <div className="w-md-25 ml-auto">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text text-twitter">
                    <SearchIcon />
                  </span>
                </div>
                <input
                  className="form-control"
                  id="exampleInputIcon1"
                  placeholder="Search for employers..."
                  type="text"
                  aria-label="Input with icon left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {employers.map((employer) => (
              <div key={employer.id} className="card shadow-soft rounded mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-9">
                      <Link
                        to={`/admin/employer-management/view/${employer.id}`}
                      >
                        {employer.blocked && (
                          <p className="badge badge-danger font-weight-bold">
                            Blocked
                          </p>
                        )}
                        <div className="d-block d-md-flex text-center align-items-center">
                          <img
                            src={
                              employer.displayPicture
                                ? employer.displayPicture
                                : UserIcon
                            }
                            alt=""
                            className="img-fluid rounded-circle user-image-sm mr-3"
                          />
                          <h4 className="font-weight-bold m-0">
                            {employer.name}
                          </h4>
                        </div>
                        <p className="font-weight-bold mt-3 mb-2">
                          <span className="mr-3">
                            <EmailIcon className="text-twitter" />
                            {employer.email}
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <div className="w-100">
                        {employer.blocked ? (
                          <button className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3">
                            Unblock employer
                          </button>
                        ) : (
                          <button className="btn btn-primary btn-sm btn-block text-twitter text-uppercase font-weight-bold mt-3">
                            Block employer
                          </button>
                        )}
                        <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3">
                          Delete employer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployersList;
