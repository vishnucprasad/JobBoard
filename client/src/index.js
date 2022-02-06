import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/App.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { AuthStateProvider } from "./contexts/AuthStateProvider";
import authReducer, { authInitialState } from "./reducers/auth";
import { EmployerStateProvider } from "./contexts/EmployerStateProvider";
import employerReducer, { employerInitialState } from "./reducers/employer";
import { UserStateProvider } from "./contexts/UserStateProvider";
import userReducer, { userInitialState } from "./reducers/user";

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider initialState={authInitialState} reducer={authReducer}>
      <EmployerStateProvider
        initialState={employerInitialState}
        reducer={employerReducer}
      >
        <UserStateProvider
          initialState={userInitialState}
          reducer={userReducer}
        >
          <App />
        </UserStateProvider>
      </EmployerStateProvider>
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
