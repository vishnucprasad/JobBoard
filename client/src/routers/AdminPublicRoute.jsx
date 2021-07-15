import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthValue } from "../contexts/auth";
import { adminInstance } from "../axios/axios";
import { actionTypes } from "../reducers/auth";
import Loader from "../pages/Loader";

const AdminPublicRoute = ({ component: Component, ...rest }) => {
  const [{ auth }, dispatch] = useAuthValue();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    adminInstance.get("/auth").then(({ data: { user } }) => {
      user
        ? dispatch({
            type: actionTypes.LOGIN,
            auth: user,
          })
        : dispatch({
            type: actionTypes.LOGOUT,
          });
      setIsLoading(false);
    });
  }, [dispatch]);

  const isAuthenticated = !!auth._id && auth.role === "Admin";

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/admin/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminPublicRoute;
