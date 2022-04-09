import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db, storage } from "./firebase";
import { uploadImage } from "./firebase";
import "./App.css";
const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleClick = () => {
    uploadImage(file);
  };

  useEffect(() => {
    const collectionRef = collection(db, "profiles");
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      let document = [];

      snapshot.docs.map((doc) => {
        document.push({...doc.data(),id:doc.id});
      });
      setData(document);
      return document;
    });
    return () => unsub;
  }, []);

  return (
    <>
      <input type="file" onChange={handleFileChange}></input>
      <button onClick={handleClick}>click me</button>
      {data.map((item) => {
        if (item.photoURL) {
          return <img src={item.photoURL} alt="name" className="image"></img>;
        }
      })}
    </>
  );
};

export default App;
