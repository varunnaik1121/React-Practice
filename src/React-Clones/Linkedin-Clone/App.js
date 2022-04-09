import React from "react";
import Login from "../Linkedin-Clone/Login";
import Home from "./comps/Home";
import "./design/App.css";

import { useAuth } from "./firebase/firebase";

const App = () => {
  const currUser = useAuth();

  return <>{currUser ? <Home /> : <Login />}</>;
};

export default App;
