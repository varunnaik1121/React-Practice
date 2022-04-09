import React from "react";

const Input = ({ onchange, placeholder, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="input"
        onChange={(e) => {
          onchange(e);
        }}
      ></input>
    </>
  );
};

export default Input;
