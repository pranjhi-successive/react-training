import React, { useState, useCallback } from 'react';
import Child from './child';

const Parent=()=> {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <Child count={count} incrementCount={incrementCount} resetCount={resetCount} />
    </div>
  );
}

export default Parent;
