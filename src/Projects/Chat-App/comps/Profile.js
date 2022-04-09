import React, { useState } from "react";
import { upload } from "../FB/Firebase";
import { useAuth } from "../FB/Firebase";
import "./Profile.css";
const Profile = () => {
  const [profile, setProfile] = useState(
    "https://image.pngaaa.com/569/2189569-middle.png"
  );

  const [file, setFile] = useState(null);
  const currentUser = useAuth();
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleClick = () => {
    upload(file, currentUser, file.name);
    alert("file succcesfully uploaded");
  };
  return (
    <div>
      <input type="file" onChange={handleChange}></input>

      <img src={profile} alt="logo" className="image"></img>
      <button onClick={handleClick} >
        upload
      </button>
    </div>
  );
};

export default Profile;
