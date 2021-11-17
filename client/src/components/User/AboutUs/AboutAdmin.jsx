import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import adminImage from "../../../images/admin.jpg";

const AboutAdmin = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-6 col-xl-6 mb-5">
            <div className="card bg-primary shadow-soft border-light organic-radius p-3">
              <img
                className="organic-radius img-fluid"
                src={adminImage}
                alt="modern desk"
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-5 text-center text-md-left">
            <h4 className="font-weight-bold">Admin & Developer of JobBoard.</h4>
            <h2 className="h2 text-twitter mb-4">Vishnu C Prasad.</h2>
            <p className="lead">
              Logical and results-driven Junior Web Developer dedicated to
              building and optimizing user-focused websites for customers with
              various business objectives. Judicious and creative when crafting
              effective websites and platforms to propel competitive advantage
              and revenue growth. Technically proficient and analytical problem
              solver with calm and focused demeanor.
            </p>
            <div className="my-5">
              <button
                className="btn btn-primary btn-icon-only text-twitter mr-4"
                type="button"
                aria-label="facebook button"
                title="Facebook"
              >
                <a
                  href="https://www.facebook.com/iam.mr.cp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </button>
              <button
                className="btn btn-primary btn-icon-only text-twitter mr-4"
                type="button"
                aria-label="instagram button"
                title="Instagram"
              >
                <a
                  href="https://instagram.com/vishnu_c_prasad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </button>
              <button
                className="btn btn-primary btn-icon-only text-twitter mr-4"
                type="button"
                aria-label="linkedin button"
                title="Linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/mrvishnucp001/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </button>
              <button
                className="btn btn-primary btn-icon-only text-twitter mr-4"
                type="button"
                aria-label="github button"
                title="Github"
              >
                <a
                  href="https://github.com/vishnucprasad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </button>
              <button
                className="btn btn-primary btn-icon-only text-twitter mr-4"
                type="button"
                aria-label="github button"
                title="Github"
              >
                <a
                  href="https://vishnucprasad.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LanguageIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmin;
