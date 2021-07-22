import React, { useEffect } from "react";
import Loader from "../Loader";

const AuthSuccess = () => {
  useEffect(() => {
    window.close();
  }, []);

  return <Loader />;
};

export default AuthSuccess;
