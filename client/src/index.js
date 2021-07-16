import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";
import './styles/App.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import authReducer, { initialState } from './reducers/auth';
import { AuthProvider } from './contexts/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={authReducer}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
