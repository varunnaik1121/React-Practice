import React from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
const Container = () => {
  return (
    <div className="ui-container">
      <Sidebar />
      <Note />
    </div>
  );
};

export default Container;
