import React from "react";

const UploadLinks = ({ name, icon }) => {
  return (
    <button className="btn">
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  );
};

export default UploadLinks;
