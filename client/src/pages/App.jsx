import React from "react";
import AppRouter from "../routers/AppRouter";
import authReducer, { authInitialState } from "../reducers/auth";
import { AuthStateProvider } from "../contexts/AuthStateProvider";
import employerReducer, { employerInitialState } from "../reducers/employer";
import { EmployerStateProvider } from "../contexts/EmployerStateProvider";
import userReducer, { userInitialState } from "../reducers/user";
import { UserStateProvider } from "../contexts/UserStateProvider";

const App = () => {
  return (
    <AuthStateProvider initialState={authInitialState} reducer={authReducer}>
      <EmployerStateProvider
        initialState={employerInitialState}
        reducer={employerReducer}
      >
        <UserStateProvider
          initialState={userInitialState}
          reducer={userReducer}
        >
          <AppRouter />
        </UserStateProvider>
      </EmployerStateProvider>
    </AuthStateProvider>
  );
};

export default App;
