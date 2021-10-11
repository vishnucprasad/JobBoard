import React, { createContext, useContext, useReducer } from "react";

export const UserStateContext = createContext();

export const UserStateProvider = ({ reducer, initialState, children }) => (
  <UserStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserStateContext.Provider>
);

export const useUserState = () => useContext(UserStateContext);
