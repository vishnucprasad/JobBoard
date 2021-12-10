import React, { createContext, useContext, useReducer } from "react";

export const EmployerFiltersStateContext = createContext();

export const EmployerFiltersStateProvider = ({
  reducer,
  initialState,
  children,
}) => (
  <EmployerFiltersStateContext.Provider
    value={useReducer(reducer, initialState)}
  >
    {children}
  </EmployerFiltersStateContext.Provider>
);

export const useEmployerFiltersState = () =>
  useContext(EmployerFiltersStateContext);
