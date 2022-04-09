import React from "react";

const Board = (props) => {
 
  return (
    <button onClick={props.onclick} id={props.id} className="btn">
      {props.children}
    </button>
  );
};

export default Board;
