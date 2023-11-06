import React, { useState, useEffect, useCallback } from "react";

const useTimer=(initialDuration)=> {
  const [duration, setDuration] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setDuration(initialDuration);
  }, [initialDuration]);

  useEffect(() => {
    let intervalId;
    if (isRunning && duration > 0) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, duration]);

  return {
    duration,
    isRunning,
    start,
    pause,
    reset,
  };
}
const CountdownTimer=()=> {
  const { duration, isRunning, start, pause, reset } = useTimer(60);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time Remaining: {duration} seconds</p>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset} disabled={isRunning}>
        Reset
      </button>
    </div>
  );
}

export default CountdownTimer;
