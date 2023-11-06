import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();
export const AuthenticationProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const login = () => {
    setLogged(true);
  };
  const logout = () => {
    setLogged(false);
  };
  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthContext;
