import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GETUSERNAME, GETUSERNUMBER } from "./user";

const App = () => {
  const userNum = useSelector((state) => state.counter.value);
  const userName = useSelector((state) => state.counter.userName);
  const dispatch = useDispatch();

  const getDetails = () => {
    console.log(userName, userNum);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={userNum}
          onChange={(e) => {
            dispatch(GETUSERNAME(e.target.value));
          }}
        ></input>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            dispatch(GETUSERNUMBER(e.target.value));
          }}
        ></input>
        <button onClick={getDetails}>get suer num</button>
      </div>
    </>
  );
};

export default App;
