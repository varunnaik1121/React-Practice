import React from "react";
import NoResult from "./NoResult";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearchTerm, debouncedSearchTerm, results, searchTerm }) => {
  const navigate = useNavigate();
  // console.log(useHistory());

  const handleClick = (id) => {
    navigate(`/heroes/${id}`);
  };
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {debouncedSearchTerm && results.length === 0 && <NoResult></NoResult>}
      {results.map((item, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <span>
              <img className="image" src={item.image} alt="image"></img>
            </span>
            <span>{item.superHero}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
