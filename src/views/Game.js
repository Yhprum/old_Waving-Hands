import React, { useEffect, useState, useContext } from "react";
import { SocketContext } from "../context/socket";
import { Row, Col, Button } from "react-bootstrap";
import "../assets/css/game.css";
import GameHistory from "../components/GameHistory";
import GameStats from "../components/GameStats";
import MoveButtons from "../components/MoveButtons";
import SpellList from "../components/SpellList";

function Game() {
  const socket = useContext(SocketContext);
  let [selected, setSelected] = useState([]);
  let [spell, setSpell] = useState([]);
  let [target, setTarget] = useState([]);
  let [state, setState] = useState("choose move");

  useEffect(() => {
    socket.emit("test", "pls work pls");
  }, [socket]);

  let game = {
    history: {
      "you": [["F", "P"], ["P", "W"], ["W", ">"], ["P", "W"], ["F", "W"], ["S", "W"], ["S", "P"], ["S", "S"]],
      "enemy": [["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"]]
    },
    stats: {
      "you": {
        hp: 15,
        enchantments: ["Resist Heat", "Fear"],
        summons: [{ type: "Troll", hp: 2 }]
      },
      "enemy": {
        hp: 13,
        enchantments: ["Disease", "Amnesia", "Resist Cold"],
        summons: [{ type: "Goblin", hp: 2 }]
      }
    }
  };

  function submitMoves() {
    socket.emit("submit move", { selected, spell, target });
    setState("waiting");
  }

  return (
    <div className="game">
      <div className="game-section">
        <div className="game-history">
          past moves
          <Row>
            <Col><GameHistory name="you" moves={game.history["you"]} /></Col>
            <Col className="text-start"><GameStats stats={game.stats["you"]} /></Col>
            <Col className="text-end"><GameStats stats={game.stats["enemy"]} /></Col>
            <Col><GameHistory name="enemy" moves={game.history["enemy"]} /></Col>
          </Row>
        </div>
        <div className="game-selection">
          <div className="game-moves">
            <Row>
              <Col>
                Right Hand
                <MoveButtons
                  history={game.history["you"].map(a=>a[0])}
                  stats={game.stats}
                  selected={selected[0]}
                  setSelected={s => setSelected(old => [s, old[1]])}
                  spell={spell[0]}
                  setSpell={s => setSpell(old => [s, old[1]])}
                  target={target[0]}
                  setTarget={t => setTarget(old => [t, old[1]])}
                /></Col>
              <Col>
                Left Hand
                <MoveButtons
                  history={game.history["you"].map(a=>a[1])}
                  stats={game.stats}
                  selected={selected[1]}
                  setSelected={s => setSelected(old => [old[0], s])}
                  spell={spell[1]}
                  setSpell={s => setSpell(old => [old[0], s])}
                  target={target[1]}
                  setTarget={t => setTarget(old => [old[0], t])}
                /></Col>
            </Row>
            <Button className="mt-2" onClick={submitMoves}>Submit Moves</Button>
          </div>
          <div className="game-spells">
            <SpellList history={game.history["you"]} selected={selected} />
          </div>
        </div>
      </div>
      <div className="history-section">
        history
      </div>
    </div>
  );
}

export default Game;
