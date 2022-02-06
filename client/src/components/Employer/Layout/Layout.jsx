import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { EmployerFiltersStateProvider } from "../../../contexts/EmployerFiltersStateProvider";
import employerFiltersReducer, {
  employerFiltersInitialState,
} from "../../../reducers/employerFilters";

const Layout = ({ children }) => {
  return (
    <div className="layout row m-0">
      <div className="col-md-2 col-10 d-none d-md-block p-0">
        <Sidebar />
      </div>
      <div className="col-md-10 p-0">
        <Header />
        <div className="layout-content">
          <EmployerFiltersStateProvider
            reducer={employerFiltersReducer}
            initialState={employerFiltersInitialState}
          >
            {children}
          </EmployerFiltersStateProvider>
        </div>
      </div>
    </div>
  );
};

export default Layout;
