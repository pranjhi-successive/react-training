import React from "react";
import { useAuth } from "./authentication";
import { usePreferences } from "../question2/preference";

const ChildComponent = () => {
  const { logged, login } = useAuth();
  const { theme, toggleTheme } = usePreferences();
  return (
    <div className={`child ${theme}`}>
      {logged ? <h1>WELCOME Pranjhi </h1> : <p>Please log in</p>}

      <button className="loginbutton" onClick={login}>
        LOGIN
      </button>
      <p> Your theme Preference is : {theme}</p>
      <button className="toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ChildComponent;
