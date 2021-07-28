import React from "react";
import EnquiriesList from "../../components/Admin/Enquiries/EnquiriesList";
import Layout from "../../components/Admin/Layout/Layout";

const Enquiries = () => {
  return (
    <Layout>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">User Enquiries</span>
        </h6>
      </div>
      <EnquiriesList />
    </Layout>
  );
};

export default Enquiries;
