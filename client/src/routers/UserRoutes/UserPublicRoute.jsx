import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuthState } from "../../contexts/AuthStateProvider";

const UserPublicRoute = ({ component: Component, ...rest }) => {
  const [{ auth }] = useAuthState();
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = !!auth._id && auth.role === "Jobseeker";

    isAuthenticated && history.goBack();
  }, [auth, history]);

  return <Route {...rest} component={(props) => <Component {...props} />} />;
};

export default UserPublicRoute;
