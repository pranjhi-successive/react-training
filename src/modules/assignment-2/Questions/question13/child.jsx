import React from "react";

const Child=({ count, incrementCount, resetCount })=> {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Child;
