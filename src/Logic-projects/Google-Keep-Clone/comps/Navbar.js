import React from "react";

const Navbar = ({ hamburger, placeholder, handleSearch, searchTerm }) => {
  return (
    <div className="nav-wrapper">
      <span>{hamburger}</span>
      <div className="search-container">
        <input
          value={searchTerm}
          className="input"
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
