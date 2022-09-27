import React, { createContext, useReducer } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ childern }) => {

    useReducer()
    return <GlobalContext.Provider value={[]}>[childern]</GlobalContext.Provider>
}           