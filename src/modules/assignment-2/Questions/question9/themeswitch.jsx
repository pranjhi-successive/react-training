import React from "react";
import { useTheme } from "./themeContext";

const Button = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className={`button ${theme}`} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Button;
