import React from "react";
import { useStateContext } from "../context/stateContextProvider";

const ImageBox = () => {
  const { results } = useStateContext();
  console.log(results);
  return (
    <div className="image-wrapper">
      {results?.image_results?.map((item) => {
        return (
          <span className="image-container">
            <a href={item?.link?.href}>
              <img className="img" src={item?.image?.src}></img>
            </a>
            <div>
              <a>{item?.link?.title}</a>
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default ImageBox;
