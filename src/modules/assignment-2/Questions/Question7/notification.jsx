import React, { useState } from "react";
import { useEffect } from "react";
const Notification = () => {
  const [message, setMessage] = useState("Message");
  useEffect(() => {
    if (message) {
      const time = setInterval(() => {
        setMessage("");
      }, 5000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [message]);

  return (
    <div>
      <h1>HELLO {message}</h1>
    </div>
  );
};
export default Notification;
