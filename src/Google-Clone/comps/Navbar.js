import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FiSettings } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useDebounce } from "use-debounce";
import { useStateContext } from "../context/stateContextProvider";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { setSearchTerm } = useStateContext();
  const [term, setTerm] = useState("");
  const [debounceValue] = useDebounce(term, 300);
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue]);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div onClick={handleClick}>
        <img
          src="https://pngimg.com/uploads/google/google_PNG102344.png"
          alt="logo"
          className="logo"
        ></img>
      </div>
      <input
        value={term}
        type="text"
        className="input"
        spellCheck="false"
        placeholder="search here...."
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      ></input>

      <div className="icons-container">
        <FiSettings className="icon" />
        <HiOutlineViewGrid className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
