import React, { useState } from "react";
import "./App2.css";

const Card = ({ value, flipped, handleClick }) => (
  <div
    className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => handleClick(value)}
  >
    <div className="front">?</div>
    <div className="back">{value === "happy" ? "😊" : "😢"}</div>
  </div>
);

const Game = ({ level, onWin, onLose }) => {
  const [cards, setCards] = useState(
    Array.from({ length: level }, () => "hidden")
  );
  const [selected, setSelected] = useState(-1);

  const handleClick = (value, index) => {
    setCards(
      cards.map((v, i) => (i === index ? value : v))
    );
    setSelected(index);
  };

  const handleReset = () => {
    setCards(
      Array.from({ length: level }, () => "hidden")
    );
    setSelected(-1);
  };

  if (selected === -1) {
    const happyIndex = Math.floor(Math.random() * level);
    return (
      <div className="game">
        {Array.from({ length: level }).map((_, i) => (
          <Card
            key={i}
            value={i === happyIndex ? "happy" : "sad"}
            flipped={false}
            handleClick={(value) => handleClick(value, i)}
          />
        ))}
      </div>
    );
  } else if (cards[selected] === "happy") {
    setTimeout(() => onWin(), 1000);
    return null;
  } else {
    setTimeout(() => onLose(), 1000);
    return (
      <div className="game">
        <div>Game over</div>
        <button onClick={handleReset}>Try Again</button>
      </div>
    );
  }
};

const App2 = () => {
  const [level, setLevel] = useState(2);

  const handleWin = () => setLevel(level + 1);
  const handleLose = () => setLevel(1);

  return (
    <div className="App">
      <Game level={level} onWin={handleWin} onLose={handleLose} />
    </div>
  );
};

export default App2;

