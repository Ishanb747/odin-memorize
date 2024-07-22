import React from 'react';
import '../styles/win.css';

const WinModal = ({ score, bestScore, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content win-modal">
        <h2>Congratulations!</h2>
        <p>You Win!</p>
        <p>Your score: {score}</p>
        <p>Best score: {bestScore}</p>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
};

export default WinModal;