import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counter";


export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
     
    </div>
  );
}
