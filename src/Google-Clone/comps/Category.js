import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.scss";
const links = [
  {
    path: "/search",
    value: "🔎 All",
  },
  {
    path: "/image",
    value: "📷 image",
  },
  {
    path: "/video",
    value: "🎥 videos",
  },
  {
    path: "/news",
    value: "📰 news",
  },
];
const Category = () => {
  return (
    <div className="links-container">
      {links.map(({ path, value },index) => {
        return (
          <NavLink to={path} activeClassName="active" className="links" key={index}>
            {value}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Category;
