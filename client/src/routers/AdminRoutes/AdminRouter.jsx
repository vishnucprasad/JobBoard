import { Switch } from "react-router";
import AdminLogin from "../../pages/Admin/AdminLogin";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import AuthSuccess from "../../pages/AuthSuccess";
import AuthError from "../../pages/AuthError";
import EmployerManagement from "../../pages/Admin/EmployerManagement";
import AdminJobManagement from "../../pages/Admin/AdminJobManagement";
import UserManagement from "../../pages/Admin/UserManagement";
import UserActivity from "../../pages/Admin/UserActivity";
import Enquiries from "../../pages/Admin/Enquiries";
import AdminProfile from "../../pages/Admin/AdminProfile";
import AdminPublicRoute from "./AdminPublicRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

const AdminRoutes = () => {
  return (
    <Switch>
      <AdminPublicRoute path="/admin" component={AdminLogin} exact={true} />
      <AdminPrivateRoute path="/admin/dashboard" component={AdminDashboard} />
      <AdminPrivateRoute path="/admin/auth/success" component={AuthSuccess} />
      <AdminPublicRoute path="/admin/auth/error" component={AuthError} />
      <AdminPrivateRoute
        path="/admin/employer-management"
        component={EmployerManagement}
        exact={true}
      />
      <AdminPrivateRoute
        path="/admin/job-management"
        component={AdminJobManagement}
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
        component={AdminProfile}
        exact={true}
      />
    </Switch>
  );
};

export default AdminRoutes;
