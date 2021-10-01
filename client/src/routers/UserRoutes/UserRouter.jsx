import { Switch } from "react-router";
import HomePage from "../../pages/User/HomePage";
import UserPublicRoute from "./UserPublicRoute";

const UserRouter = () => {
  return (
    <Switch>
      <UserPublicRoute path="/" component={HomePage} />
    </Switch>
  );
};

export default UserRouter;
