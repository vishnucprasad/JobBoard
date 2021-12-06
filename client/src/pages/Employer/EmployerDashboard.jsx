import React, { useEffect, useState } from "react";
import DashboardTiles from "../../components/Employer/Dashboard/DashboardTiles";
import DashboardCharts from "../../components/Employer/Dashboard/DashboardCharts";
import { useEmployerState } from "../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../reducers/employer";
import { employerInstance } from "../../axios/axios";
import Loader from "../Loader";

const EmployerDashboard = () => {
  const [, dispatch] = useEmployerState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    employerInstance.get("/dashboard").then(({ data }) => {
      dispatch({
        type: employerActionTypes.SET_DASHBOARD_DATA,
        data,
      });
      setIsLoading(false);
    });
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="mb-4">
        <h6 className="font-weight-bold text-uppercase m-0">
          <span className="">Dashboard</span>
        </h6>
      </div>
      <DashboardTiles />
      <DashboardCharts />
    </div>
  );
};

export default EmployerDashboard;
