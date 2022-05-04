import React, { useState } from "react";
import Navbar from "./comps/Navbar";
import RoutesComp from "./comps/RoutesComp";
import Footer from "./comps/Footer";
import Category from "./comps/Category";
import "./App.scss";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <RoutesComp></RoutesComp>
      <Footer></Footer>
    </div>
  );
};

export default App;
