import React, { useState } from "react";
import withLogger from "./WithLog";
import UserDataComponent from "./UserData";

const Task15 = () => {
  const Logger = withLogger(UserDataComponent);

  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>Get Random Users</button>
      {clicked && <Logger />}
    </div>
  );
};

export default Task15;