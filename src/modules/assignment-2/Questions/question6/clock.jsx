import React, { useState } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  );
};
export default Clock;
