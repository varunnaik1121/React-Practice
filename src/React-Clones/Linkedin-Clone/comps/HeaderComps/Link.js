import React from "react";

const Link = ({ icon, title }) => {
  return (
    <div className="link">
      <span className="icon">{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default Link;
