import React, { useState, useEffect } from "react";
import "./App.css";

const tiers = [
  { size: 2, happyFace: Math.floor(Math.random() * 2) },
  { size: 3, happyFace: Math.floor(Math.random() * 3) },
  { size: 4, happyFace: Math.floor(Math.random() * 4) },
  { size: 4, happyFace: Math.floor(Math.random() * 4) }
];

function App() {
  const [tier, setTier] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleCardClick = index => {
    if (index === tiers[tier].happyFace) {
      setIsFlipping(true);
      setIsWin(true);
      setTimeout(() => {
        setIsFlipping(false);
        setIsWin(false);
        setTier(tier + 1);
      }, 1000);
    } else {
      setIsFlipping(true);
      setIsLose(true);
    }
  };

  useEffect(() => {
    if (tier === tiers.length) {
      alert("You win the game!");
    }
  }, [tier]);

  return (
    <div className="App">
      {tier < tiers.length ? (
        <div className="tier">
          {Array.from({ length: tiers[tier].size }, (_, i) => (
            <div
              key={i}
              className={`card ${isFlipping ? "flipping" : ""} ${
                i === tiers[tier].happyFace ? "correct" : "incorrect"
              } ${isWin ? "win" : ""} ${isLose && isFlipping ? "lose" : ""}`}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      ) : (
        <p>You win the game!</p>
      )}
      {isLose && (
        <p className="game-over">Game Over</p>
      )}
    </div>
  );
}

export default App;
