import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Gamepage from "./pages/Gamepage";

const ws = new WebSocket("ws://localhost:9090/");

ws.onopen = () => {
  ws.send(
    JSON.stringify({
      method: "connect",
    })
  );
};

function App() {
  const [game, setGame] = useState(null);
  const [clientId, setClientId] = useState(null);

  let navigate = useNavigate();

  ws.onmessage = (message) => {
    const response = JSON.parse(message.data);

    switch (response.method) {
      case "connect":
        setClientId(response.clientId);
        console.log("client", response.clientId);
        break;
      case "createGame":
        setGame(response.game);
        navigate("/game");
        break;
      case "joinGame":
        setGame(response.game);
        navigate("/game");
        break;

      default:
        console.log("Unknown method: ", response.method);
        break;
    }
  };

  const handelGame = (type, id = "") => {
    switch (type) {
      case "create":
        ws.send(
          JSON.stringify({
            method: "createGame",
            clientId: clientId,
          })
        );
        break;
      case "join":
        ws.send(
          JSON.stringify({
            method: "joinGame",
            clientId: clientId,
            gameId: id,
          })
        );
        break;
      default:
        console.log("Unknown game type: ", type);
        break;
    }
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing handelGame={handelGame} />} />
        <Route
          exact
          path="/game"
          element={
            <Gamepage
              ws={ws}
              cliendId={clientId}
              game={game}
              setGame={setGame}
            />
          }
        />
        <Route
          path="*"
          element={
            <main
              style={{
                margin: "auto",
                color: "red",
              }}
            >
              <div>There's nothing here!</div>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
