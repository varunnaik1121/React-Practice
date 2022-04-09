import axios from "../axios";
import React from "react";
import { useEffect } from "react";
import requests from "../requests";

const Banner = ({ movie, setMovie, setBackPoster }) => {
  useEffect(() => {
    fetchTrending();

    return () => {
      fetchTrending();
    };
  }, []);

  const fetchTrending = async () => {
    const res = await axios.get(requests?.fetchNetflixOriginals);
    const data = res?.data?.results;
    let oneMovie = data[Math.floor(Math.random() * 19)];
    setMovie(oneMovie);
  };

  return (
    <header
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "right 35% top 25%",
        backgroundRepeat: "no-repeat",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }")`,
      }}
    >
      <div className="fade-left">
        <div className="banner-contents">
          <h4 className="banner-title">
            {movie?.original_title || movie?.title || movie?.original_name}
          </h4>
          <button className="button active">play</button>
          <button className="button">trailer</button>
          <p className="banner-description">{movie?.overview}</p>
        </div>
      </div>

      <div className="fade-bottom"></div>
    </header>
  );
};

export default Banner;
