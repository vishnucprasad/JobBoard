import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AdminRouter from "./AdminRouter/AdminRouter";
import EmployerRouter from "./EmployerRouter/EmployerRouter";
import UserRouter from "./UserRoutes/UserRouter";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/user" />
        </Route>
        <Route path="/user" component={UserRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Route path="/employer" component={EmployerRouter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
