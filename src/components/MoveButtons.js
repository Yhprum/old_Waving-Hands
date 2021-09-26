import React, {useEffect} from "react";
import { Button, ButtonGroup, FormControl } from "react-bootstrap";
import spells from "../data/spells";

function MoveButtons(props) {

  useEffect(() => {
    let spellOptions = spells.filter(spell => (props.history.join("") + props.selected).endsWith(spell.sequence)).sort((a, b)=> b.sequence.length - a.sequence.length);
    props.setSpell(spellOptions[0]?.name);
  }, [props.selected]);
  let spellOptions = spells.filter(spell => (props.history.join("") + props.selected).endsWith(spell.sequence)).sort((a, b)=> b.sequence.length - a.sequence.length);

  return (
    <div>
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
      {spellOptions.length !== 0 && <FormControl value={props.spell} onChange={e => props.setSpell(e.target.value)} as="select" className="mt-2">
        {spellOptions.map(option =>
          <option key={option.name} value={option.name}>{option.name}</option>
        )}
      </FormControl>}
    </div>
  );
}

export default MoveButtons;
