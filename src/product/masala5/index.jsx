import React, { useState } from 'react';
import './index.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function increaseProgress() {
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
  }

  function decreaseProgress() {
    setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : prevProgress));
  }

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-buttons">
        <button onClick={decreaseProgress}>Decrease</button>
        <button onClick={increaseProgress}>Increase</button>
      </div>
    </div>
  );
}

export default ProgressBar;
