import React, { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState();

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleStepChange = (e) => {
    setStep(parseInt(e.target.value) || 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>
        Step: <input type="number" value={step} onChange={handleStepChange} />
      </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterWithStep;
