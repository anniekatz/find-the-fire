import React, { useState } from "react";
import "./Card.css";

const Card = ({ level }) => {
  const [flipped, setFlipped] = useState(false);
  const [face, setFace] = useState("");

  const handleClick = () => {
    setFlipped(true);
    setFace(Math.random() < 0.5 ? "😊" : "😢");
  };

  return (
    <div
      className={`card-container level-${level} ${flipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card">
        <div className="face front">
          <img src="card-back.png" alt="card back" />
        </div>
        <div className="face back">{face}</div>
      </div>
    </div>
  );
};

export default Card;
