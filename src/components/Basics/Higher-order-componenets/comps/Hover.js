import React from "react";
import AppWrap from "../AppWrap";
const Hover = ({ count, increment }) => {
  return (
    <>
      <div>count in hover is {count}</div>
    </>
  );
};

export default AppWrap(Hover);
