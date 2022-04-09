import React from "react";
import "../design/Header.css";
import NavLeft from "./HeaderComps/NavLeft";
import NavRight from "./HeaderComps/NavRight";
const Header = () => {
  return (
    <div className="header-container">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Header;
