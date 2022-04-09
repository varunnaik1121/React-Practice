import React from "react";
import { useState } from "react";
const logoAddress =
  "https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg";
const NavLeft = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="nav-left">
      <div className="logo-wrapper">
        <img src={logoAddress} alt="logo" className="logo"></img>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="input"
          placeholder="search something..."
        ></input>
      </div>
    </div>
  );
};

export default NavLeft;
