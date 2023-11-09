import { useState } from "react";
const useLocalStorage = (key, initialValue) => {
  const storedData = localStorage.getItem(key);
  const initialData = storedData ? JSON.parse(storedData) : initialValue;
  const [data, setData] = useState(initialData);
  const setLocalStorageData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };
  const removeLocalStorageData = () => {
    localStorage.removeItem(key);
    setData(initialValue);
  };

  return [data, setLocalStorageData, removeLocalStorageData];
};
function UserPreferences() {
  const [theme, setTheme, resetTheme] = useLocalStorage("userTheme", "light");

  return (
    <div>
      <h1> Preferences for the user </h1>
      <p>Preferred : {theme}</p>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
      <button onClick={resetTheme}>Reset </button>
    </div>
  );
}

export default UserPreferences;
