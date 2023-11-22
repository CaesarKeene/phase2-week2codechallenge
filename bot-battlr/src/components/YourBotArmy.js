import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, onClickRelease, onClickDischarge }) {
  return (
    <div>
      <h1>Your Bot Army</h1>
      {army.map((bot) => (
        <Bot key={bot.id} bot={bot} onClickRelease={() => onClickRelease(bot.id)} onClickDischarge={() => onClickDischarge(bot.id)} />
      ))}
    </div>
  );
}

export default YourBotArmy;