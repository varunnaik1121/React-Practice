import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Heroes = ({ results }) => {
  const [heroes, setHeroes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let filtered = results.filter((item) => item.id === id);
    setHeroes(filtered);
  }, [id]);
  return <div>
      Heroes
      {heroes.map((hero)=>{
          return <div key={hero.id}>
              <img className="image-main" src={hero.image} alt={hero.superHero}></img>
          </div>
      })}
      </div>;
};

export default Heroes;
