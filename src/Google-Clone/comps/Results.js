import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/stateContextProvider";
import ImageBox from "./ImageBox";
import Loading from "./Loading";
import VideoBox from "./VideoBox";
import SearchBox from "./SearchBox";
import NewsBox from "./NewsBox";
const Results = () => {
  const location = useLocation();
  const {
    loading,
    searchTerm,
    setSearchTerm,
    setLoading,
    getResults,
    results,
  } = useStateContext();

  useEffect(() => {
    if (searchTerm !== "") {
      getResults(`${location.pathname}/q=${searchTerm}&num=20`);
    }
  }, [location.pathname, searchTerm]);

  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return <SearchBox />;
      break;

    case "/image":
      return <ImageBox />;
      break;

    case "/video":
      return <VideoBox />;
      break;
    case "/news":
      return <NewsBox />;
      break;

    default:
      return "Error...";
      break;
  }

  return <div>Results</div>;
};

export default Results;
