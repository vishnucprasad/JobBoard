import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import AuthSuccess from "../pages/Admin/AuthSuccess";
import AuthError from "../pages/Admin/AuthError";
import EmployerManagement from "../pages/Admin/EmployerManagement";
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
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
