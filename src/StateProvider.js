import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to every component in the app
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
