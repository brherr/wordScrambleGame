import React, { useState } from 'react';

const Score = () => {
    const [score, setScore] = useState(0);


  return (
    <h1>Score: {score}</h1>
  )
}

export default Score;