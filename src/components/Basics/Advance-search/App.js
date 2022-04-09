import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiUsers from "./users";
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterNames = () => {
    let filteredNames = users.filter((user) =>
      user.first_name.includes(searchTerm)
    );
    setUsers(filteredNames);
  };

  useEffect(() => {
    setUsers(apiUsers.splice(0, 100));
    if (searchTerm) {
      filterNames();
    }
  }, [searchTerm]);

  return (
    <div>
      Advace seacrh filter examples
      <div className="wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        {users.map((user) => {
          const { id, first_name, second_name, email, gender } = user;
          return (
            <div key={id} className="row">
              <span>{first_name}</span>
              <span>{second_name}</span>
              <span>{email}</span>
              <span>{gender}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
