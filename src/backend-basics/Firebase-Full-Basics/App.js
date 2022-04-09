import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { db, signInWithGoogle, signOutFromGoogle } from "./Firebase/firebase";
import { useAuth } from "./Firebase/firebase";
const App = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const user = useAuth();

  const addToDatabase = async () => {
    const docRef = doc(db, "users", user?.uid);
    const collectionRef = collection(docRef, "messages");
    try {
      const paylaod = {
        todo: task,
        name: user?.email,
        timestamp: serverTimestamp(),
      };
      await addDoc(collectionRef, paylaod);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const colRef = collection(db, `users/${user?.uid}/messages`);
    const unsub = onSnapshot(colRef, (snap) =>
      setData(snap.docs.map((doc) => doc.data()))
    );

    return () => unsub;
  }, [user?.uid]);

  console.log(data);

  return (
    <>
      {user ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button onClick={() => signOutFromGoogle()}>signOut</button>
          <button onClick={addToDatabase}>add task</button>
        </div>
      ) : (
        <button onClick={() => signInWithGoogle()}>login with google </button>
      )}
    </>
  );
};

export default App;
