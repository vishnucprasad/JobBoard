import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import EmployerRoutes from "./EmployerRoutes/EmployerRoutes";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      {AdminRoutes}
      {EmployerRoutes}
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
