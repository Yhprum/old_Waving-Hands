import React from "react";
import { ListGroup } from "react-bootstrap";

function GameHistory(props) {
  return (
    <ListGroup>
      {props.name}
      <ListGroup.Item>{props.moves[0][0]} | {props.moves[0][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[1][0]} | {props.moves[1][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[2][0]} | {props.moves[2][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[3][0]} | {props.moves[3][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[4][0]} | {props.moves[4][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[5][0]} | {props.moves[5][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[6][0]} | {props.moves[6][1]}</ListGroup.Item>
      <ListGroup.Item>{props.moves[7][0]} | {props.moves[7][1]}</ListGroup.Item>
    </ListGroup>
  );
}

export default GameHistory;
