import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";

const App = () => {
  const [level, setLevel] = useState(1);
  const [happyFaceIndex, setHappyFaceIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startNewGame = () => {
    setLevel(1);
    setHappyFaceIndex(Math.floor(Math.random() * level));
    setGameOver(false);
  };

  const handleCardClick = index => {
    if (index === happyFaceIndex) {
      if (level === 3) {
        alert("You win!");
        startNewGame();
      } else {
        setLevel(level + 1);
        setHappyFaceIndex(Math.floor(Math.random() * level));
      }
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="game">
      {gameOver ? (
        <div>
          <p>Game over</p>
          <button onClick={startNewGame}>Start new game</button>
        </div>
      ) : (
        <>
          <p>Level {level}</p>
          {Array.from({ length: level }, (_, index) => (
            <Card
              key={index}
              level={level}
              handleClick={() => handleCardClick(index)}
              flipped={index === happyFaceIndex}
              front={"📎"}
              back={index === happyFaceIndex ? "😊" : "😢"}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
