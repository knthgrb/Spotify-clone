import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import PlayerBox from "../components/PlayerBox";

const Player = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      <PlayerBox />
    </div>
  );
};

export default Player;
