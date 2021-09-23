import React from "react";
import AppRouter from "../routers/AppRouter";
import authReducer, { authInitialState } from "../reducers/auth";
import { AuthStateProvider } from "../contexts/AuthStateProvider";
import employerReducer, { employerInitialState } from "../reducers/employer";
import { EmployerStateProvider } from "../contexts/EmployerStateProvider";

const App = () => {
  return (
    <AuthStateProvider initialState={authInitialState} reducer={authReducer}>
      <EmployerStateProvider
        initialState={employerInitialState}
        reducer={employerReducer}
      >
        <AppRouter />
      </EmployerStateProvider>
    </AuthStateProvider>
  );
};

export default App;
