import React from "react";
import { SocketContext, socket } from "./context/socket";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./views/Game";

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <Game />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
