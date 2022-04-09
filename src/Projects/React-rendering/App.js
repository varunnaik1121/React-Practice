import { equalTo } from "firebase/database";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Input from "./comps/Input";
import Name from "./comps/Name";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <h3>seconds{seconds}</h3>
    </>
  );
};

export default App;
