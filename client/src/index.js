import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/App.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import authReducer, { initialState } from "./reducers/auth";
import { AuthStateProvider } from "./contexts/AuthStateProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider initialState={initialState} reducer={authReducer}>
      <App />
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
