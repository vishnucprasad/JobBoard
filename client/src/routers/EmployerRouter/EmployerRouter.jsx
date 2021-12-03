import { Route, Switch } from "react-router";
import AuthSuccess from "../../pages/AuthSuccess";
import AuthError from "../../pages/AuthError";
import EmployerLogin from "../../pages/Employer/EmployerLogin";
import EmployerSignup from "../../pages/Employer/EmployerSignup";
import EmployerDashboard from "../../pages/Employer/EmployerDashboard";
import EmployerJobManagement from "../../pages/Employer/EmployerJobManagement";
import EmployerViewJob from "../../pages/Employer/EmployerViewJob";
import PostJob from "../../pages/Employer/PostJob";
import EditJob from "../../pages/Employer/EditJob";
import ResumeRequests from "../../pages/Employer/ResumeRequests";
import AproovedRequests from "../../pages/Employer/AproovedRequests";
import RejectedRequests from "../../pages/Employer/RejectedRequests";
import EmployerProfile from "../../pages/Employer/EmployerProfile";
import EmployerPublicRoute from "./EmployerPublicRoute";
import EmployerPrivateRoute from "./EmployerPrivateRoute";
import NotFound from "../../pages/NotFound";
import ViewRequest from "../../pages/Employer/ViewRequest";
import ScheduleMeeting from "../../pages/Employer/ScheduleMeeting";

const EmployerRouter = () => {
  return (
    <Switch>
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
      <EmployerPublicRoute path="/employer/auth/error" component={AuthError} />
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
        path="/employer/job-management/view/:id"
        component={EmployerViewJob}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/job-management/create"
        component={PostJob}
      />
      <EmployerPrivateRoute
        path="/employer/job-management/edit/:id"
        component={EditJob}
      />
      <EmployerPrivateRoute
        path="/employer/resume-requests"
        component={ResumeRequests}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/resume-requests/view/:id"
        component={ViewRequest}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/approved-requests"
        component={AproovedRequests}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/approved-requests/view/:id"
        component={ViewRequest}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/approved-requests/schedule/:id"
        component={ScheduleMeeting}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/rejected-requests"
        component={RejectedRequests}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/rejected-requests/view/:id"
        component={ViewRequest}
        exact={true}
      />
      <EmployerPrivateRoute
        path="/employer/profile"
        component={EmployerProfile}
        exact={true}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default EmployerRouter;
