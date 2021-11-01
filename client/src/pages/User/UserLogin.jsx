import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/User/Login/LoginForm";
import LoginOptions from "../../components/User/Login/LoginOptions";

const UserLogin = () => {
  return (
    <main>
      <section className="min-vh-100 d-flex bg-primary align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 justify-content-center">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                  <h2 className="h4 font-weight-bold">Sign in to JobBoard</h2>
                </div>
                <div className="card-body">
                  <LoginForm />
                  <LoginOptions />
                  <div className="text-center mt-4">
                    <Link to="/user/signup">
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

export default UserLogin;
