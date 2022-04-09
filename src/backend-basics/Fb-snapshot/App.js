import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useRef } from "react";
import db from "./firebase";
const App = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
    });
    return unsub;
  }, []);

  const addData = async () => {
    const docRef = collection(db, "users");
    const payload = { name: "nishal", college: "lb and sbs college", age: 39 };
    await addDoc(docRef, payload);
  };
  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={addData}>addData</button>
    </>
  );
};

export default App;
