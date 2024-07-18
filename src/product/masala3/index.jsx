import React, { useState } from 'react';
import './index.css'

export default function Post() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  return (
    <div className="post">
      <h2>Post Title</h2>
      <div className="post-buttons">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>
    </div>
  );
}

