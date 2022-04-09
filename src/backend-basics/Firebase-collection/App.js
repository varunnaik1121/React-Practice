import React from "react";
import useCollection from "./Firebase/useCollection";

import { useState } from "react";
import { db } from "./Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
const App = () => {
  const { data, loading } = useCollection("users");
  const [loading1, setLoading] = useState(false);
  console.log(data);

  const AddUser = async (path) => {
    setLoading(true);
    const collectionRef = collection(db, path);
    const payload = {
      name: "deepak",
      age: 23,
      course: "bmx",
    };
    return await addDoc(collectionRef, payload);
  };

  if (loading) {
    return <div>loading.....</div>;
  }
  return (
    <div>
      {data.map((item) => {
        return <div key={item?.id}>{item?.name}</div>;
      })}

      <button onClick={() => AddUser("users")}>
        {loading1 ? "loading" : "submit"}
      </button>
    </div>
  );
};

export default App;
