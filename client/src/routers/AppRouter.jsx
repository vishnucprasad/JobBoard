import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import AuthSuccess from "../pages/Admin/AuthSuccess";
import AuthError from "../pages/Admin/AuthError";
import EmployerManagement from "../pages/Admin/EmployerManagement";
import JobManagement from "../pages/Admin/JobManagement";
import UserManagement from "../pages/Admin/UserManagement";
import UserActivity from "../pages/Admin/UserActivity";
import Enquiries from "../pages/Admin/Enquiries";
import Profile from "../pages/Admin/Profile";
import NotFound from "../pages/NotFound";
import AdminPublicRoute from "./AdminRoutes/AdminPublicRoute";
import AdminPrivateRoute from "./AdminRoutes/AdminPrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AdminPublicRoute path="/admin" component={Login} exact={true} />
        <AdminPrivateRoute path="/admin/dashboard" component={Dashboard} />
        <AdminPrivateRoute path="/admin/auth/success" component={AuthSuccess} />
        <AdminPublicRoute path="/admin/auth/error" component={AuthError} />
        <AdminPrivateRoute
          path="/admin/employer-management"
          component={EmployerManagement}
          exact={true}
        />
        <AdminPrivateRoute
          path="/admin/job-management"
          component={JobManagement}
          exact={true}
        />
        <AdminPrivateRoute
          path="/admin/user-management"
          component={UserManagement}
          exact={true}
        />
        <AdminPrivateRoute
          path="/admin/user-activity"
          component={UserActivity}
          exact={true}
        />
        <AdminPrivateRoute
          path="/admin/enquiries"
          component={Enquiries}
          exact={true}
        />
        <AdminPrivateRoute
          path="/admin/profile"
          component={Profile}
          exact={true}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
