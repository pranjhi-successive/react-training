import React, { useState } from "react";
function ControlledInput() {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="input">
      <p>
        ENTER YOUR DESIRED INPUT:
        <input text="text" value={input} onChange={handleInputChange} />
      </p>
      <p>INPUT VALUE:{input}</p>
    </div>
  );
}
export default ControlledInput;
