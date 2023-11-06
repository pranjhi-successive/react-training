import React, { createContext, useState, useContext } from "react";
const Preferences = createContext();
export const PreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };
  return (
    <Preferences.Provider value={{ theme, toggleTheme }}>
      {children}
    </Preferences.Provider>
  );
};
export default Preferences;
export const usePreferences = () => {
  return useContext(Preferences);
};
