import React from "react";
import Row from "./comps/Row";
import requests from "./requests";
import "./App.css";
import Banner from "./comps/Banner";
import { useState } from "react";
import Navbar from "./comps/Navbar";

const App = () => {
  const [movie, setMovie] = useState(null);

  return (
    <>
      <Navbar></Navbar>
      <Banner movie={movie} setMovie={setMovie}></Banner>
      <Row
        title="netflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
        setMovie={setMovie}
        movie={movie}
      ></Row>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    </>
  );
};

export default App;
