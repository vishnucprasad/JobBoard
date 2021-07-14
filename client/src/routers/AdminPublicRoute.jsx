import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminPublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/admin-panel/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminPublicRoute;
