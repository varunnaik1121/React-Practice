import { connectDatabaseEmulator } from "firebase/database";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();

    setData(data.results[0].location);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const flattenObject = (obj) => {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }
    });

    return flattened;
  };

  useEffect(() => {
    console.log(flattenObject(data));
  }, [data]);

  return <div>flattening the object properties</div>;
};

export default App;

//https://yb68mi.csb.app/
