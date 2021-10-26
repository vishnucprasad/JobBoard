import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import FindJob from "../../pages/User/FindJob";
import HomePage from "../../pages/User/HomePage";
import UserSignUp from "../../pages/User/UserSignUp";
import UserPublicRoute from "./UserPublicRoute";
import UserLogin from "../../pages/User/UserLogin";
import ViewJob from "../../pages/User/ViewJob";
import { useAuthState } from "../../contexts/AuthStateProvider";
import { authActionTypes } from "../../reducers/auth";
import Axios from "../../axios/axios";
import Loader from "../../pages/Loader";

const UserRouter = () => {
  const [, dispatch] = useAuthState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("/auth")
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

  return isLoading ? (
    <Loader />
  ) : (
    <Switch>
      <Route exact path="/user" component={HomePage} />
      <Route path="/user/find" component={FindJob} />
      <Route path="/user/job/view/:id" component={ViewJob} />
      <UserPublicRoute path="/user/signup" component={UserSignUp} />
      <UserPublicRoute path="/user/login" component={UserLogin} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default UserRouter;
