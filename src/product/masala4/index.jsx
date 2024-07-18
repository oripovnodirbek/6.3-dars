import React, { useState } from 'react';
import './index.css';

function Games() {
  const games = ['Chess', 'Monopoly', 'Scrabble', 'Risk', 'Catan', 'Clue', 'Carcassonne', 'Pandemic'];
  const [selectedGame, setSelectedGame] = useState('');

  function pickGame() {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  }

  return (
    <div className="game-picker">
        {selectedGame && <h2>{selectedGame}</h2>}
        <button onClick={pickGame}>Pick Game</button>

    </div>
  );
}

export default Games;
