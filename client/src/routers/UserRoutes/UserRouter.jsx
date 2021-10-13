import { Route, Switch } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import FindJob from "../../pages/User/FindJob";
import HomePage from "../../pages/User/HomePage";

const UserRouter = () => {
  return (
    <Switch>
      <Route exact path="/user" component={HomePage} />
      <Route path="/user/find" component={FindJob} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default UserRouter;
