import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import NotFound from "../pages/NotFound";
import AdminPublicRoute from "./AdminPublicRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AdminPublicRoute path="/admin" component={Login} exact={true} />
        <AdminPrivateRoute path="/admin/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
