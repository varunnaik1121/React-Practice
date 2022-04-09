import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classArray, setClassArray] = useState(
    Array(5).fill({ className: "active" })
  );
  const [userTitle, setUserTitle] = useState("");
  const [userNotes, setUserNotes] = useState("");
  const handleSearch = (e) => {
    return setSearchTerm(e.target.value);
  };

  const handleTitle = (e) => {
    return setUserTitle(e.target.value);
  };
  const handleNotes = (e) => {
    return setUserNotes(e.target.value);
  };

  useEffect(() => {
    setClassArray(classArray.fill({ className: "" }, 1));
  }, []);

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        handleSearch,
        handleClick,
        handleNotes,
        handleTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return React.useContext(AppContext);
};

export { useGlobal, AppContext, AppProvider };
