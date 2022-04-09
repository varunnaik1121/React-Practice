import React from "react";
import Link from "./Link";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
const LinkBox = () => {
  return (
    <div className="link-wrapper">
      <Link icon={<AiFillHome />} title="home" />
      <Link icon={<BsFillPeopleFill />} title="community" />
      <Link icon={<BsHandbagFill />} title="job" />
      <Link icon={<BiMessageRoundedDetail />} title="messages" />
      <Link icon={<IoMdNotifications />} title="notifications" />
    </div>
  );
};

export default LinkBox;
