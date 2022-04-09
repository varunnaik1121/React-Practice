import React from "react";

const Name = ({ name }) => {
  console.log("unnecesery component rendred");
  return <div>{name}</div>;
};

export default Name;
