import React from "react";
import { useAuth } from "../firebase/firebase";
const Post = () => {
  const currUser = useAuth();
  return (
    <div className="post">
      <header className="posts-wrapper">
        <div>
          <img src={currUser?.photoURL} alt="logo" className="image"></img>
        </div>
        <div className="info-wrapper">
          <span>user name</span>
          <span>13 december 2022</span>
        </div>
      </header>
      <div className="image-wrapper">
        <img
          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=170667a&w=0&h=8haDTC2HXTF6Qb0TkjDy3FauBCd9PCchl6KKX2cUpqg="
          alt="iamge"
          className="post-image"
        ></img>
      </div>
      <div className="message-wrapper">
        <p className="userText">random message </p>
      </div>
      <div className="social-buttons">
        <button className="btn">like</button>
        <button className="btn">comment</button>
        <button className="btn">share</button>
      </div>
    </div>
  );
};

export default Post;
