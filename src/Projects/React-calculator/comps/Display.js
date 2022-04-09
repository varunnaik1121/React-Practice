import React from "react";

const Display = ({ value, inputRef }) => {
  return (
    <div className="screen-wrapper">
      <input className="input" type="text" value={value} ref={inputRef}></input>
    </div>
  );
};

export default Display;
