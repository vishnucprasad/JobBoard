import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Admin/Login";
import NotFound from "../pages/NotFound";
import AdminPublicRoute from "./AdminPublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AdminPublicRoute path="/admin" component={Login} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
