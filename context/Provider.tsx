import React, { createContext, useReducer, Children } from "react";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    // code goes here
    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
  };
  