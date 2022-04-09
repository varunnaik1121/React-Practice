import React from "react";
import { useEffect, useState } from "react";
import Comp from "./comp";
import { genres } from "../Movies-App/genres";
import { RiTeamFill } from "react-icons/ri";

const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=27f8f3bd42154c8ec9a4719e97e56332&page=1`;
//gives array of objects

const App = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);
  //logic for fetching data from api and adding to movies array
  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const list = data.results;
    setMovies(list);
  };
  //genres that matches the movies category
  const type = genres.genres;
  //it takes genre-ids and return the ids to genres example:drama ,action etc...
  const getCategory = (ids) => {
    let arr = [];
    ids.forEach((id) => {
      for (let i = 0; i < type.length; i++) {
        if (type[i].id === id) {
          return arr.push(type[i].name);
        }
      }
    });

    return arr;
  };
  const getGenres = () => {
    const value = movies.map((movie) => {
      let cat = getCategory(movie.genre_ids);

      return { ...movie, category: cat };
    });

    return value;
  };

  useEffect(() => {
    fetchData(APIURL);
   
  }, []);

  useEffect(() => {
  
      setCategory(getGenres());
   
    console.log(category);
  }, [movies]);

  return (
    <div>
      app page
      <Comp category={category}></Comp>
      
    </div>
  );
};
export default App;
