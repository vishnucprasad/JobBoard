import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthValue } from "../contexts/auth";
import { adminInstance } from "../axios/axios";
import { actionTypes } from "../reducers/auth";

const AdminPublicRoute = ({ component: Component, ...rest }) => {
  const [{ auth }, dispatch] = useAuthValue();

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
    });
  }, [dispatch]);

  const isAuthenticated = !!auth._id && auth.role === "Admin";

  return (
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
