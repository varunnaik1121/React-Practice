import React from "react";
import AppWrap from "../AppWrap";
const Button = ({ count, increment }) => {
  return (
    <>
      <button onClick={increment}>Button</button>
      <h2>count is {count}</h2>
    </>
  );
};

export default AppWrap(Button);
