import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../../components/User/SignUp/SignupForm";

const UserSignUp = () => {
  return (
    <main>
      <section className="min-vh-100 d-flex bg-primary align-items-center my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 justify-content-center">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                  <h2 className="h4 font-weight-bold">
                    Signup for a new account
                  </h2>
                </div>
                <div className="card-body">
                  <SignupForm />
                  <div className="text-center mt-4">
                    <Link to="/user/login">
                      Already have an account ? Login here.
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

export default UserSignUp;
