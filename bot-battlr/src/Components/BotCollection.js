import React from "react";
import Bot from "./Bot";

function BotCollection({ bots, onClickEnlist, onClickRelease, onClickDischarge }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onClickEnlist={onClickEnlist} onClickRelease={onClickRelease} onClickDischarge={onClickDischarge} />
      ))}
    </div>
  );
}

export default BotCollection;