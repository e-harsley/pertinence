import React, { createContext, useReducer, Children } from "react";
import authInitialState from "./initialStates/authInitialState";
import auth from "./reducers/auth";
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    // code goes here
    return (
        <GlobalContext.Provider value={{authState,
            authDispatch}}>{children}</GlobalContext.Provider>
    )
  };
  