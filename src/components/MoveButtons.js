import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function MoveButtons(props) {
  return (
    <ButtonGroup className="btn-matrix">
      <Button variant={props.selected === "D" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("D")}>D</Button>
      <Button variant={props.selected === "F" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("F")}>F</Button>
      <Button variant={props.selected === "P" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("P")}>P</Button>
      <Button variant={props.selected === "S" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("S")}>S</Button>
      <Button variant={props.selected === "W" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("W")}>W</Button>
      <Button variant={props.selected === "C" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected("C")}>C</Button>
      <Button variant={props.selected === ">" ? "secondary" : "outline-secondary"} onClick={() => props.setSelected(">")}>&gt;</Button>
      <Button variant={props.selected === undefined ? "secondary" : "outline-secondary"} onClick={() => props.setSelected(undefined)}/>
    </ButtonGroup>
  );
}

export default MoveButtons;
