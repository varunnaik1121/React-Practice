import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const getResults = async (url) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-Proxy-Location": "US",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "a5215a3809msh12d5ebc20ebc32bp17af60jsn2bd36ade464a",
      },
    });
    const data = await response.json();

    setResults(data);

    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{
        results,
        setResults,
        searchTerm,
        setSearchTerm,
        loading,
        setLoading,
        getResults,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
