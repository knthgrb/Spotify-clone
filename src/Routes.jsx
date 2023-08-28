import { Route, Routes } from "react-router-dom";

import PlaylistTracks from "./components/PlaylistTracks";
import Body from "./components/Body";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/playlist" element={<PlaylistTracks />} />
    </Routes>
  );
};

export default AppRoutes;
