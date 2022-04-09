import React from "react";
import "../design/content.css";
import UploadImage from "./UploadImage";
import Post from "./Post";
const Content = () => {
  return (
    <div className="content-wrapper">
      <UploadImage />
      <Post />
    </div>
  );
};

export default Content;
