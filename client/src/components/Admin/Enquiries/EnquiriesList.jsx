import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import UserIcon from "../../../images/user-icon.png";

const EnquiriesList = () => {
  const enquiries = [
    {
      id: "dgkjsvfbliuhblfuglshf1",
      subject: "Lorem Ipsum",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore delectus aliquam quis ducimus ipsa dicta sint vero doloremque quos, laborum, similique quisquam ab vel recusandae architecto tenetur possimus sed.",
      date: "01-01-0001",
      userDetails: {
        id: "dgkjsvfbliuhblfuglsdddddhf1",
        name: "Vishnu",
        email: "mail@vishnucprasad.in",
        mobile: "+918157983670",
      },
    },
    {
      id: "dgkjsvfbliuhblfuglshf2",
      subject: "Lorem Ipsum",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore delectus aliquam quis ducimus ipsa dicta sint vero doloremque quos, laborum, similique quisquam ab vel recusandae architecto tenetur possimus sed.",
      date: "01-01-0001",
      userDetails: {
        id: "dgkjsvfbliuhblfuglsdddddhf2",
        name: "Vishnu",
        email: "mail@vishnucprasad.in",
        mobile: "+918157983670",
        displayPicture:
          "https://lh3.googleusercontent.com/a-/AOh14GhBd0XUn7qW2xHxlqZK-Fr7Pp8D8IVJnMHHa5VT=s96-c",
      },
    },
    {
      id: "dgkjsvfbliuhblfuglshf3",
      subject: "Lorem Ipsum",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore delectus aliquam quis ducimus ipsa dicta sint vero doloremque quos, laborum, similique quisquam ab vel recusandae architecto tenetur possimus sed.",
      date: "01-01-0001",
      userDetails: {
        id: "dgkjsvfbliuhblfuglsdddddhf3",
        name: "Vishnu",
        email: "mail@vishnucprasad.in",
        mobile: "+918157983670",
      },
    },
    {
      id: "dgkjsvfbliuhblfuglshf4",
      subject: "Lorem Ipsum",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore delectus aliquam quis ducimus ipsa dicta sint vero doloremque quos, laborum, similique quisquam ab vel recusandae architecto tenetur possimus sed.",
      date: "01-01-0001",
      userDetails: {
        id: "dgkjsvfbliuhblfuglsdddddhf4",
        name: "Vishnu",
        email: "mail@vishnucprasad.in",
        mobile: "+918157983670",
      },
    },
  ];

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Enquiries</div>
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
                  placeholder="Search for enquiries..."
                  type="text"
                  aria-label="Input with icon left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 pt-3 pb-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="card shadow-soft rounded mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <Link to={`/admin/enquiries/view/${enquiry.id}`}>
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              enquiry.userDetails.displayPicture
                                ? enquiry.userDetails.displayPicture
                                : UserIcon
                            }
                            alt=""
                            className="img-fluid rounded-circle user-image-sm mr-3"
                          />
                          <div>
                            <h6 className="font-weight-bold m-0">
                              {enquiry.userDetails.name}
                            </h6>
                            <div className="badge badge-twitter font-weight-bolder">
                              {enquiry.userDetails.email}
                            </div>
                          </div>
                        </div>
                        <h4 className="font-weight-bold my-3">
                          {enquiry.subject}
                        </h4>
                        <p className="font-weight-bold mt-3 mb-2">
                          <div className="mr-3 text-truncate">
                            <MailIcon className="text-twitter" />
                            {enquiry.message}
                          </div>
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center">
                        <div className="text-center w-100 mr-4">
                          <p className="font-weight-bold m-0">{enquiry.date}</p>
                        </div>
                        <div className="w-100">
                          <button className="btn btn-primary btn-sm btn-block text-danger text-uppercase font-weight-bold mt-3">
                            Delete
                          </button>
                        </div>
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

export default EnquiriesList;
