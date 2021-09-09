import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AuthSuccess from "../pages/AuthSuccess";
import AuthError from "../pages/AuthError";
import EmployerManagement from "../pages/Admin/EmployerManagement";
import AdminJobManagement from "../pages/Admin/AdminJobManagement";
import UserManagement from "../pages/Admin/UserManagement";
import UserActivity from "../pages/Admin/UserActivity";
import Enquiries from "../pages/Admin/Enquiries";
import AdminProfile from "../pages/Admin/AdminProfile";
import NotFound from "../pages/NotFound";
import AdminPublicRoute from "./AdminRoutes/AdminPublicRoute";
import AdminPrivateRoute from "./AdminRoutes/AdminPrivateRoute";
import EmployerLogin from "../pages/Employer/EmployerLogin";
import EmployerSignup from "../pages/Employer/EmployerSignup";
import EmployerDashboard from "../pages/Employer/EmployerDashboard";
import EmployerJobManagement from "../pages/Employer/EmployerJobManagement";
import ResumeRequests from "../pages/Employer/ResumeRequests";
import AproovedRequests from "../pages/Employer/AproovedRequests";
import RejectedRequests from "../pages/Employer/RejectedRequests";
import EmployerPublicRoute from "./EmployerRoutes/EmployerPublicRoute";
import EmployerPrivateRoute from "./EmployerRoutes/EmployerPrivateRoute";
import EmployerProfile from "../pages/Employer/EmployerProfile";

const AppRouter = () => {
  return (
    <Router>
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
        <EmployerPublicRoute
          path="/employer"
          component={EmployerLogin}
          exact={true}
        />
        <EmployerPublicRoute
          path="/employer/signup"
          component={EmployerSignup}
          exact={true}
        />
        <EmployerPrivateRoute
          path="/employer/auth/success"
          component={AuthSuccess}
        />
        <EmployerPublicRoute
          path="/employer/auth/error"
          component={AuthError}
        />
        <EmployerPrivateRoute
          path="/employer/dashboard"
          component={EmployerDashboard}
        />
        <EmployerPrivateRoute
          path="/employer/job-management"
          component={EmployerJobManagement}
          exact={true}
        />
        <EmployerPrivateRoute
          path="/employer/resume-requests"
          component={ResumeRequests}
          exact={true}
        />
        <EmployerPrivateRoute
          path="/employer/aprooved-requests"
          component={AproovedRequests}
          exact={true}
        />
        <EmployerPrivateRoute
          path="/employer/rejected-requests"
          component={RejectedRequests}
          exact={true}
        />
        <EmployerPrivateRoute
          path="/employer/profile"
          component={EmployerProfile}
          exact={true}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
