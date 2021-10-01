import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from "./AdminRoutes/AdminRouter";
import EmployerRouter from "./EmployerRoutes/EmployerRouter";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRouter} />
        <Route path="/employer" component={EmployerRouter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
