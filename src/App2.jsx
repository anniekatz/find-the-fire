import React, { useState } from "react";
import "./App2.css";
import Card from "./Card";

const App2 = () => {
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    setTimeout(() => {
      const isCorrect = Math.random() >= 0.5; // 50% chance of being correct
      if (isCorrect) {
        setLevel(level + 1);
      } else {
        setLevel(null);
      }
    }, 500);
  };

  return (
    <div className="App2">
      {level === null ? (
        <div>Game over</div>
      ) : (
        <div className="game">
          {[...Array(level)].map((_, i) => (
            <Card
              key={i}
              onClick={() => handleClick(i)}
              isSelected={selected === i}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App2;
