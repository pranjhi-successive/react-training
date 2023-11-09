import React, { useState } from "react";
const RandomNumberGenerator=()=>{
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>Random Number: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}
export default RandomNumberGenerator;
