import Login from "./components/Login";
import "./App.css";
import React, { useEffect, useState } from "react";
import { getToken } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return <>{token ? <h1>I have logged in</h1> : <Login />}</>;
}

export default App;
