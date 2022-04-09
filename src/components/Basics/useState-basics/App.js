import { keyframes } from "@emotion/react";
import { func } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const getObjectKeys = (locations) => {
    console.log(locations);

    const { coordinates, street, timezone, ...rest } = locations;
    const totalKeys = {
      ...rest,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      name: street.name,
      number: street.number,
    };
    let headers = Object.keys(totalKeys);
    console.log(headers);
  };
  const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    getObjectKeys(data.results[0].location);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <h3>Fetching the data</h3>;
};

export default App;
