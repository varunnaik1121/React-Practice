import React from "react";
import { signInWithGoogle } from "./firebase/firebase";
const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        sign in with google
      </button>
    </div>
  );
};

export default Login;
