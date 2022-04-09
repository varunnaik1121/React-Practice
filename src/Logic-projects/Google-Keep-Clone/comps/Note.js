import React, { useState } from "react";
import Input from "./Input";
import { useGlobal } from "./context";

const Note = () => {
  const { userTitle, userNotes, handleTitle, handleNotes } =
    useGlobal();
  return (
    <div className="note-wrapper">
      <Input
        value={userTitle}
        onchange={handleTitle}
       
        palceholder={"title"}
      ></Input>
      <Input
        value={userNotes}
        onchange={handleNotes}
        palceholder={"Notes"}
      ></Input>
    </div>
  );
};

export default Note;
