import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import FindJob from "../../pages/User/FindJob";
import HomePage from "../../pages/User/HomePage";
import ViewJob from "../../pages/User/ViewJob";
import ApplyJob from "../../pages/User/ApplyJob";
import UserSignUp from "../../pages/User/UserSignUp";
import UserLogin from "../../pages/User/UserLogin";
import AuthSuccess from "../../pages/AuthSuccess";
import AuthError from "../../pages/AuthError";
import UserPublicRoute from "./UserPublicRoute";
import UserPrivateRoute from "./UserPrivateRoute";
import { useAuthState } from "../../contexts/AuthStateProvider";
import { authActionTypes } from "../../reducers/auth";
import Axios from "../../axios/axios";
import Loader from "../../pages/Loader";
import ViewApplication from "../../pages/User/ViewApplication";
import Layout from "../../components/User/Layout/Layout";
import ViewAllApplications from "../../pages/User/ViewAllApplications";
import UserProfile from "../../pages/User/UserProfile";
import ContactUs from "../../pages/User/ContactUs";
import AboutUs from "../../pages/User/AboutUs";

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
    <Layout>
      <Switch>
        <Route exact path="/user" component={HomePage} />
        <Route path="/user/find" component={FindJob} />
        <Route path="/user/job/view/:id" component={ViewJob} />
        <Route path="/user/about" component={AboutUs} />
        <Route path="/user/contact" component={ContactUs} />
        <UserPublicRoute path="/user/signup" component={UserSignUp} />
        <UserPublicRoute path="/user/login" component={UserLogin} />
        <UserPrivateRoute path="/user/auth/success" component={AuthSuccess} />
        <UserPublicRoute path="/user/auth/error" component={AuthError} />
        <UserPrivateRoute path="/user/job/apply/:id" component={ApplyJob} />
        <UserPrivateRoute
          path="/user/application/view/:id"
          component={ViewApplication}
        />
        <UserPrivateRoute
          path="/user/applications"
          component={ViewAllApplications}
        />
        <UserPrivateRoute path="/user/profile" component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default UserRouter;
