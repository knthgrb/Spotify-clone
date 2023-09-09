import React from "react";
import Sidebar from "../components/Sidebar";
import PlayerBox from "../components/PlayerBox";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes";
const Player = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <AppRoutes />
      </div>
      <PlayerBox />
    </Router>
  );
};

export default Player;
