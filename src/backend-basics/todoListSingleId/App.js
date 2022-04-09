import React from "react";
import Login from "./comps/Login";
import { db } from "./Firebase/firebase";
import { useAuth } from "./Firebase/firebase";
import ChatRoom from "./comps/ChatRoom";
console.log(db);
const App = () => {
  const user = useAuth();
  console.log(user);
  return <>{user ? <ChatRoom></ChatRoom> : <Login />}</>;
  //varun
};

export default App;
