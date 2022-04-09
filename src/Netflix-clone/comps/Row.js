import React, { useState, useEffect } from "react";
import axios from "../axios";
const IMAGE_URL = `http://image.tmdb.org/t/p/original`;

const Row = ({ title, fetchUrl, isLarge, setMovie, movie, backPoster }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response?.data?.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  const handleHover = (index) => {
    if (isLarge) {
      updatePoster(index);
    }
  };

  const updatePoster = (index) => {
    setMovie(movies[index]);
  };

  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="single-post">
        {movies?.map((movie, index) => {
          return (
            <img
              src={
                IMAGE_URL +
                `${
                  isLarge
                    ? movie?.poster_path
                    : movie?.backdrop_path || movie?.poster_path
                }`
              }
              className={`poster ${isLarge ? "large" : "small"}`}
              key={index}
              alt={"poster"}
              onMouseOver={() => {
                handleHover(index);
              }}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
