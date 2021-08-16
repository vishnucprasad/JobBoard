import axios from "axios";

export const adminInstance = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: { Authorization: `Bearer` },
});

export const employerInstance = axios.create({
  baseURL: process.env.REACT_APP_EMPLOYER_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: { Authorization: `Bearer` },
});
