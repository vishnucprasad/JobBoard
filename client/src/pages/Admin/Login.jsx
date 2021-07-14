import React from "react";
import LoginForm from "../../components/Admin/Login/LoginForm";
import LoginOptions from "../../components/Admin/Login/LoginOptions";

const Login = () => {
  return (
    <main>
      <section className="min-vh-100 d-flex bg-primary align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 justify-content-center">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                  <h2 className="h4 font-weight-bold">
                    Sign in to Admin Panel
                  </h2>
                </div>
                <div className="card-body">
                  <LoginForm />
                  <LoginOptions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
