import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import FindJob from "../../pages/User/FindJob";
import HomePage from "../../pages/User/HomePage";
import ViewJob from "../../pages/User/ViewJob";

const UserRouter = () => {
  return (
    <Switch>
      <Route exact path="/user" component={HomePage} />
      <Route path="/user/find" component={FindJob} />
      <Route path="/user/job/view/:id" component={ViewJob} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default UserRouter;
