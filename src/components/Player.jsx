import React from "react";
import Sidebar from "../components/Sidebar";
import PlayerBox from "../components/PlayerBox";
import PlaylistTracks from "./PlaylistTracks";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes";
const Player = () => {
  return (
    <div className="h-screen w-full">
      <Router>
        <div className="flex">
          <Sidebar />
          <AppRoutes />
        </div>
        <PlayerBox />
      </Router>
    </div>
  );
};

export default Player;
