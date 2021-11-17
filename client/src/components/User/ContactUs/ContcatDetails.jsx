import React from "react";
import ContactForm from "./ContactForm";
import QuickContact from "./QuickContact";

const ContcatDetails = () => {
  return (
    <main>
      <section className="mt-3 mt-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-12 mb-5">
              <div className="card bg-primary shadow-soft border-light p-2 p-md-3 p-lg-5">
                <QuickContact />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContcatDetails;
