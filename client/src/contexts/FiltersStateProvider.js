import React, { createContext, useContext, useReducer } from "react";

export const FiltersStateContext = createContext();

export const FiltersStateProvider = ({ reducer, initialState, children }) => (
  <FiltersStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </FiltersStateContext.Provider>
);

export const useFiltersState = () => useContext(FiltersStateContext);
