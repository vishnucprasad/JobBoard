import React from "react";
import LoginForm from "../../components/Employer/Login/LoginForm";
import { Link } from "react-router-dom";

const EmployerLogin = () => {
  return (
    <main>
      <section className="min-vh-100 d-flex bg-primary align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 justify-content-center">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                  <h2 className="h4 font-weight-bold">
                    Sign in to Employer Dashboard
                  </h2>
                </div>
                <div className="card-body">
                  <LoginForm />
                  <div className="text-center mt-4">
                    <Link to="/employer/signup">
                      Create a new employer accout ? Signup here.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerLogin;
