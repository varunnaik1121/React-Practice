import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import updateUser from "./redux/apiCalls";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    updateUser(dispatch);
  }, []);

  return <div>this is home page</div>;
};

export default Home;
