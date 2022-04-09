import React, { useRef } from "react";
import { signup, db, useAuth, logout, login } from "./FB/Firebase";
import Profile from "./comps/Profile";
const App = () => {
  console.log(db);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const currentUser = useAuth();
  console.log(currentUser);
  const handleClick = async () => {
    try {
      await signup(emailRef.current.value, passRef.current.value);
    } catch {
      alert("cant signin again");
    }
  };

  const handleLogOut = async () => {
    try {
      await logout();
      emailRef.current.value = "";
      passRef.current.value = "";
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogIn = async () => {
    try {
      await login(emailRef.current.value, passRef.current.value);
      emailRef.current.value = "";
      passRef.current.value = "";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h3>your email is {currentUser?.email}</h3>
      <input type="email" ref={emailRef}></input>
      <input type="password" ref={passRef}></input>
      <button onClick={handleClick}>signup</button>
      <button onClick={handleLogOut}>LogOut</button>
      <button onClick={handleLogIn}>LogIn</button>
      {currentUser && <Profile></Profile>}
    </div>
    
    
  );
};

export default App;
