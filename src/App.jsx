import Login from "./components/Login";
import "./App.css";
import React, { useEffect } from "react";
import { getToken } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayer } from "./stores/useDataLayer";

const spotify = new SpotifyWebApi();

const App = function App() {
  const { token, SET_PLAYLIST, SET_USER, SET_TOKEN } = useDataLayer();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      SET_TOKEN(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        SET_USER(user);
      });

      spotify.getUserPlaylists().then((playlist) => {
        SET_PLAYLIST(playlist);
      });
    }
  }, []);

  return <>{token ? <Player spotify={spotify} /> : <Login />}</>;
};

export default App;
