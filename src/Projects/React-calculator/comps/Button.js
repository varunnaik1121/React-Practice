import React from "react";

const Button = ({ innerValue, className, handleClick }) => {
  return (
    <button className={`button ${className}`} onClick={()=>{handleClick(innerValue)}} >
      {innerValue}
    </button>
  );
};

export default Button;
