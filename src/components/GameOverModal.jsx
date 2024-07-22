import React from 'react';
import '../styles/modal.css';

const GameOverModal = ({ score, bestScore, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Over!</h2>
        <p>Your score: {score}</p>
        <p>Best score: {bestScore}</p>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOverModal;