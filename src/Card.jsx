import React, { useState } from "react";
import "./Card.css";

const Card = ({ level, handleNextLevel }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selected, setSelected] = useState(false);

  let cards = [];
  for (let i = 0; i < level; i++) {
    cards.push(
      <div
        key={i}
        className={`card ${isFlipped ? "is-flipped" : ""}`}
        onClick={() => {
          setIsFlipped(true);
          setSelected(i === 0);
        }}
      >
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">
          {i === 0 ? "😊" : "😢"}
        </div>
      </div>
    );
  }

  if (isFlipped && selected) {
    setTimeout(() => {
      handleNextLevel();
    }, 1000);
  }

  return (
    <div>
      {cards}
      {isFlipped && !selected && <div>Game over</div>}
    </div>
  );
};

export default Card;
