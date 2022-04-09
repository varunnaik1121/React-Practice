import React from "react";
import { useState } from "react";
import { signInWithGoogle, signOutFromGoogle, auth } from "./firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const App = () => {
  const [state, setState] = useState(69);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => setUser(currUser));
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      {user ? (
        <button onClick={() => signOutFromGoogle()}>logout</button>
      ) : (
        <button onClick={() => signInWithGoogle()}>google sign in</button>
      )}
    </>
  );
};

export default App;
