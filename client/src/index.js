import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/App.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
