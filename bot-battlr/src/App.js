import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { bots } from "./components/Data"; 

function App() {
  const [yourBotArmy, setYourBotArmy] = React.useState([]);

  const enlistBot = (bot) => {
    if (!yourBotArmy.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  const releaseBot = (botId) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<BotCollection bots={bots} onClickEnlist={enlistBot} onClickRelease={releaseBot} onClickDischarge={dischargeBot} />}
          />
          <Route
            path="/your-bot-army"
            element={<YourBotArmy army={yourBotArmy} onClickRelease={releaseBot} onClickDischarge={dischargeBot} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;