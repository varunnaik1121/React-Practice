import React from "react";

const Input = ({ onChange, value }) => {
  console.log("component rendered");
  return <input value={value} type="text" onChange={onChange}></input>;
};

export default Input;
