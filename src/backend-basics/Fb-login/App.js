import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { signup, useAuth, logout, login, upload } from "./firebase";
import "./style.css";
const App = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [photoURL, setPhotoURL] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCR7BsnNrK4DxWg0_NFUQ7U2pQK_ewWHUBmQ&usqp=CAU"
  );
  const currrentUser = useAuth();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (currrentUser?.photoURL) {
      setPhotoURL(currrentUser?.photoURL);
    }
  }, [currrentUser]);

  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    let currFile = e.target.files[0];
    if (currFile) {
      setImage(currFile);
    }
  };

  const handleClick = async () => {
    try {
      await signup(userDetails.email, userDetails.password);
      alert("email and password submitted successfully");
    } catch (err) {
      console.log(err);
    }
    setIsDisabled(true);
  };

  const handleLogOut = () => {
    try {
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = () => {
    return login(userDetails.email, userDetails.password);
  };

  const handleUpload = () => {
    upload(image, currrentUser);
  };
  return (
    <>
      <div>currenlt logged in as : {currrentUser?.email}</div>
      <input
        type="text"
        name="email"
        placeholder="type here email"
        value={userDetails.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="type here password"
        value={userDetails.password}
        onChange={handleChange}
      ></input>
      <div>
        {!currrentUser ? (
          <div>
            <button onClick={handleClick}>sign up</button>
            <button onClick={handleLogIn}>Login</button>
          </div>
        ) : (
          <>
            <button onClick={handleLogOut} disabled={!currrentUser}>
              Logout
            </button>
            <input type="file" onChange={handleFileChange}></input>
            <div>
              <img src={photoURL} alt="no" className="profile-image"></img>
              <button onClick={handleUpload}>uplaod</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
