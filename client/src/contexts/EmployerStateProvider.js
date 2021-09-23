import React, { createContext, useContext, useReducer } from "react";

export const EmployerStateContext = createContext();

export const EmployerStateProvider = ({ reducer, initialState, children }) => (
  <EmployerStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </EmployerStateContext.Provider>
);

export const useEmployerState = () => useContext(EmployerStateContext);
