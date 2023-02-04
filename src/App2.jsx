import React, { useState } from 'react';
import './App2.css'

const Card = ({ front, back, onClick, flipped }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">{front}</div>
        <div className="back">{back}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [level, setLevel] = useState(1);
  const [flippedCards, setFlippedCards] = useState([]);
  const [cards, setCards] = useState([]);

  const handleCardClick = (index) => {
    setFlippedCards([...flippedCards, index]);
  };

  const resetGame = () => {
    setLevel(1);
    setFlippedCards([]);
    setCards([]);
  };

  const generateCards = () => {
    let newCards = [];
    for (let i = 0; i < level; i++) {
      newCards.push({
        front: '😐',
        back: i === 0 ? '😊' : '😢',
      });
    }
    setCards(newCards);
  };

  const checkIfWon = () => {
    if (flippedCards.includes(0)) {
      setTimeout(() => {
        setLevel(level + 1);
        setFlippedCards([]);
      }, 1000);
    } else {
      alert('Game over');
      resetGame();
    }
  };

  React.useEffect(() => {
    generateCards();
  }, [level]);

  React.useEffect(() => {
    if (flippedCards.length === level) {
      checkIfWon();
    }
  }, [flippedCards]);

  return (
    <div className="game-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          front={card.front}
          back={card.back}
          onClick={() => handleCardClick(index)}
          flipped={flippedCards.includes(index)}
        />
      ))}
    </div>
  );
};

export default App;
