import React from "react";
import { signInWithGoogle } from "../Firebase/firebase";
const Login = () => {
  return (
    <button className="btn" onClick={() => signInWithGoogle()}>
      Login with google
    </button>
  );
};

export default Login;
