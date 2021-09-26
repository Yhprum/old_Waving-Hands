import React from "react";

function GameStats(props) {
  return (
    <div>
      <div className="fw-bold">Stats</div>
      <div>hp: {props.stats.hp}</div>
      <div className="fw-bold">Enchantments</div>
      {props.stats.enchantments.map(enchantment =>
        <div key={enchantment}>{enchantment}</div>
      )}
      {props.stats.summons.length && <div className="fw-bold">Summons</div>}
      {props.stats.summons.map(summon =>
        <div key={summon.type}>{summon.type}: {summon.hp} hp</div>
      )}
    </div>
  );
}

export default GameStats;
