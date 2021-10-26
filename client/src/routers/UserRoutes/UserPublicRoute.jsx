import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../contexts/AuthStateProvider";

const UserPublicRoute = ({ component: Component, ...rest }) => {
  const [{ auth }] = useAuthState();

  const isAuthenticated = !!auth._id && auth.role === "Jobseeker";

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default UserPublicRoute;
