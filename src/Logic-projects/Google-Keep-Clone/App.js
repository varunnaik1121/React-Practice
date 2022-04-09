import React from "react";
import { useGlobal } from "./comps/context";
import Navbar from "./comps/Navbar";

import { GiHamburgerMenu } from "react-icons/gi";
import "./comps/App.css";
import Container from "./comps/Container";
const App = () => {
  const { handleSearch, searchTerm } = useGlobal();

  return (
    <>
      <Navbar
        hamburger={<GiHamburgerMenu className="hamburger-icon" />}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        placeholder="Type the text here"
      />
      <Container>
       
      </Container>
    </>
  );
};

export default App;
