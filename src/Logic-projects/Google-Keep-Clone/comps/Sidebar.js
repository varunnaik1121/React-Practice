import React from "react";
import FunctionalButton from "./FunctionalButton";
import { AiOutlineBulb } from "react-icons/ai";
import { useGlobal } from "./context";
const Sidebar = () => {
  const { handleClick } = useGlobal();

  const clickMe = () => {
    console.log("hello");
  };
  return (
    <div className="sidebar-wrapper">
      <FunctionalButton
        icon={<AiOutlineBulb />}
        name={"Reminders"}
        onClick={handleClick}
      />
      <FunctionalButton
        icon={<AiOutlineBulb />}
        name={"Reminders"}
        onClick={handleClick}
      />
      <FunctionalButton
        icon={<AiOutlineBulb />}
        name={"Edit labels"}
        onClick={handleClick}
      />
      <FunctionalButton
        icon={<AiOutlineBulb />}
        name={"archieve"}
        onClick={clickMe}
      />
    </div>
  );
};

export default Sidebar;
