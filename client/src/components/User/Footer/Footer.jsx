import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useAuthState } from "../../../contexts/AuthStateProvider";

const Footer = () => {
  const [{ auth }] = useAuthState();
  const isAuthenticated = !!auth._id && auth.role === "Jobseeker";

  return (
    <div className="footer">
      <div className="bg-dark text-white p-5">
        <div className="row">
          <div className="col-md-6 p-3">
            <h3 className="font-weight-bolder">JobBoard</h3>
            <p className="py-3">
              We are implementing a solution for jobseekers and employers to
              apply for jobs and post job vacancies
            </p>
            <div>
              <button
                className="btn btn-dark btn-icon-only btn-sm mr-4"
                type="button"
                aria-label="facebook button"
                title="facebook"
              >
                <FacebookIcon />
              </button>
              <button
                className="btn btn-dark btn-icon-only btn-sm mr-4"
                type="button"
                aria-label="instagram button"
                title="instagram"
              >
                <InstagramIcon />
              </button>
              <button
                className="btn btn-dark btn-icon-only btn-sm mr-4"
                type="button"
                aria-label="twitter button"
                title="twitter"
              >
                <TwitterIcon />
              </button>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className="pb-4">
              <h5 className="font-weight-bolder">Are you an Employer ?</h5>
              <div className="py-1">
                <Link to="/employer" className="text-underline">
                  Post a job
                </Link>
              </div>
            </div>
            <div>
              <h5 className="font-weight-bolder">User ?</h5>
              <div className="py-1">
                {isAuthenticated ? (
                  <button className="btn btn-link text-white border-0 text-underline">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="text-underline">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-github text-white p-4">
        <div className="d-md-flex p-4">
          <p className="m-0">&copy;&nbsp;All rights reserved by JobBoard.</p>
          <div className="ml-auto my-3 my-md-0">
            <Link to="/about" className="mr-4">
              About Us
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
