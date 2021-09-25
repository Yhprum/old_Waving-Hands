import React from "react";
import spells from "../data/spells";

function SpellList(props) {
  const boldSequence = sequence => {
    if (Array.isArray(sequence)) {
      sequence = [sequence].join(", ");
    }
    for (let i = 0; i <= props.history.length; i++) {
      let moves = props.history.slice(i);
      let moveL = moves.map(m=>m[0]).join("");
      let moveR = moves.map(m=>m[1]).join("");
      if (sequence.startsWith(moveL) && sequence !== moveL) {
        if (sequence.startsWith(moveL  + props.selected[0])) {
          sequence = sequence.replace(moveL  + props.selected[0], `${moveL}<u>${props.selected[0]}</u>`);
        } else if (props.selected[0] !== undefined) {
          sequence = sequence.replace(moveL, `<s>${moveL}</s>`);
        }
        sequence = sequence.replace(moveL, `<b>${moveL}</b>`);
        break;
      }
      if (sequence.startsWith(moveR) && sequence !== moveR) {
        if (sequence.startsWith(moveR  + props.selected[1])) {
          sequence = sequence.replace(moveR  + props.selected[1], `${moveR}<u>${props.selected[1]}</u>`);
        }
        sequence = sequence.replace(moveR, `<b>${moveR}</b>`);
        break;
      }
    }
    return sequence;
  };
  const boldSpell = (spell, sequence) => {
    for (let i = 0; i <= props.history.length; i++) {
      let moves = props.history.slice(i);
      let moveL = moves.map(m=>m[0]).join("");
      let moveR = moves.map(m=>m[1]).join("");
      if (sequence === moveL + props.selected[0] || sequence === moveR + props.selected[1]) {
        spell = <b>{spell}</b>;
        break;
      }
    }
    return spell;
  };
  return (
    <div className="spell">
      {spells.map(spell =>
        <div key={spell.name} className="d-flex">
          <div dangerouslySetInnerHTML={{__html: boldSequence(spell.sequence)}} />
          <div className="ms-auto">{boldSpell(spell.name, spell.sequence)}</div>
        </div>
      )}
    </div>
  );
}

export default SpellList;
