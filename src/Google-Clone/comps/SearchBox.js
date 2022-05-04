import React from "react";
import { useStateContext } from "../context/stateContextProvider";
import "./SearchBox.scss";
const SearchBox = () => {
  const { results } = useStateContext();
  console.log(results);

  return (
    <div className="wrapper">
      <div className="top-search">
        {results?.results?.map((item, index) => {
          return (
            index === 0 && (
              <div key={index} className="top">
                <p className="results">{`About ${
                  results.total
                } results in (${parseInt(results.ts).toFixed(2)}seconds)`}</p>
                <p className="link-name">{item.link}</p>
                <a href={item.link} className="heading">
                  {item.title}
                </a>
                <p>{item.desc}</p>
              </div>
            )
          );
        })}
      </div>
      <div className="second-section">
        <h4 className="suggestion"> People also ask</h4>
        {results?.answers?.map((answer) => {
          return (
            <div>
              <p className="link-name">{answer}</p>
            </div>
          );
        })}
      </div>
      <div className="total-results">
        {results?.results?.map((item, index) => {
          return (
            index > 0 && (
              <div className="single-item">
                <p className="link-name">{item.link}</p>
                <a
                  href={item.link}
                  className="heading"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
                <p className="link-name">
                  {item?.description ? item.description : ""}
                </p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default SearchBox;
