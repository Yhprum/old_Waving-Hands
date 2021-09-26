import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../assets/css/game.css";
import GameHistory from "../components/GameHistory";
import GameStats from "../components/GameStats";
import MoveButtons from "../components/MoveButtons";
import SpellList from "../components/SpellList";

function Game() {
  let [selected, setSelected] = useState([]);
  let [spell, setSpell] = useState([]);

  let state = {
    history: {
      "p1": [["F", "P"], ["P", "W"], ["W", ">"], ["P", "W"], ["F", "W"], ["S", "W"], ["S", "P"], ["S", "S"]],
      "p2": [["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"], ["S", "W"]]
    },
    stats: {
      "p1": {
        hp: 15,
        enchantments: ["Resist Heat", "Fear"],
        summons: [{ type: "Troll", hp: 2 }]
      },
      "p2": {
        hp: 13,
        enchantments: ["Disease", "Amnesia", "Resist Cold"],
        summons: [{ type: "Goblin", hp: 2 }]
      }
    }
  };

  function submitMoves() {
    console.log(selected);
    console.log(spell);
  }

  return (
    <div className="game">
      <div className="game-section">
        <div className="game-history">
          past moves
          <Row>
            <Col><GameHistory name="p1" moves={state.history["p1"]} /></Col>
            <Col className="text-start"><GameStats stats={state.stats["p1"]} /></Col>
            <Col className="text-end"><GameStats stats={state.stats["p2"]} /></Col>
            <Col><GameHistory name="p2" moves={state.history["p2"]} /></Col>
          </Row>
        </div>
        <div className="game-selection">
          <div className="game-moves">
            <Row>
              <Col>
                Right Hand
                <MoveButtons
                  history={state.history["p1"].map(a=>a[0])}
                  selected={selected[0]}
                  setSelected={s => setSelected(old => [s, old[1]])}
                  spell={spell[0]}
                  setSpell={s => setSpell(old => [s, old[1]])}
                /></Col>
              <Col>
                Left Hand
                <MoveButtons
                  history={state.history["p1"].map(a=>a[1])}
                  selected={selected[1]}
                  setSelected={s => setSelected(old => [old[0], s])}
                  spell={spell[1]}
                  setSpell={s => setSpell(old => [old[0], s])}
                /></Col>
            </Row>
            <Button className="mt-2" onClick={submitMoves}>Submit Moves</Button>
          </div>
          <div className="game-spells">
            <SpellList history={state.history["p1"]} selected={selected} />
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
