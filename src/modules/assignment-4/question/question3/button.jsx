import React, { useState } from "react";
function Message() {
  return (
    <div className="message">
      <p>Hello Welcome to the page</p>
    </div>
  );
}
const Condition=()=> {
  const [input, setInput] = useState(" ");
  const [showmessage, setShowMessage] = useState(false);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleShowMessage = () => {
    if (input === "show") {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          onChange={handleInputChange}
        />
        <button onClick={handleShowMessage}>Show Message</button>
      </div>
      {showmessage && <Message />}
    </div>
  );
}
export default Condition;
