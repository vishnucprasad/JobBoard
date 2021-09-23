import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../contexts/AuthStateProvider";
import { employerInstance } from "../../axios/axios";
import { authActionTypes } from "../../reducers/auth";
import Loader from "../../pages/Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ auth }, dispatch] = useAuthState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    employerInstance
      .get("/auth")
      .then(({ data: { user } }) => {
        user &&
          dispatch({
            type: authActionTypes.LOGIN,
            auth: user,
          });
        setIsLoading(false);
      })
      .catch(() => {
        dispatch({
          type: authActionTypes.LOGOUT,
        });
        setIsLoading(false);
      });
  }, [dispatch]);

  const isAuthenticated = !!auth._id && auth.role === "Employer";

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
          <Redirect to="/employer" />
        )
      }
    />
  );
};

export default PrivateRoute;
