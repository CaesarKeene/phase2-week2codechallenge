import React from "react";

function Bot({ bot, onClickEnlist, onClickRelease, onClickDischarge }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <button onClick={() => onClickEnlist(bot)}>Enlist</button>
      <button onClick={() => onClickRelease(bot.id)}>Release</button>
      <button onClick={() => onClickDischarge(bot.id)}>Discharge</button>
    </div>
  );
}

export default Bot;