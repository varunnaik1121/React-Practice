import React from "react";
import "./ChatRoom.scss";
import { useCollection } from "../Firebase/firebase";
const ChatRoom = () => {
  const messages = useCollection();
  console.log(messages);
  return (
    <div className="chatroom-container">
      <h4>Messaging App</h4>
      <div className="message__container">
        <div className="message-wrapper">
          <p className="mine">
            hi there
          </p>
          <img
            src="https://images.unsplash.com/photo-1649615644692-b26f39484243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="image1"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
