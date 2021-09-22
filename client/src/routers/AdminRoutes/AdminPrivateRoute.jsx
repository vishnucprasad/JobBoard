import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../contexts/AuthStateProvider";
import { adminInstance } from "../../axios/axios";
import { actionTypes } from "../../reducers/auth";
import Loader from "../../pages/Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ auth }, dispatch] = useAuthState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    adminInstance
      .get("/auth")
      .then(({ data: { user } }) => {
        user &&
          dispatch({
            type: actionTypes.LOGIN,
            auth: user,
          });
        setIsLoading(false);
      })
      .catch(() => {
        dispatch({
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
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};

export default PrivateRoute;
