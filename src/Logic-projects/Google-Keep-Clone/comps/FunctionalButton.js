import React from "react";

const FunctionalButton = ({ icon, name, onClick }) => {
  return (
    <div className="link" onClick={onClick}>
      <span>{icon}</span>
      <li>{name}</li>
    </div>
  );
};

export default FunctionalButton;
