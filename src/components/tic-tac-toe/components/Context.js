import React from "react";
import { useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <AppContext.Provider value={{ blocks }}>{children}</AppContext.Provider>
  );
};

const useGlobal = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
