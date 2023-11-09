import React, { useState } from "react";
import About from "../question3/About";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [logged, setLogged] = useState(false);

  const handleLogin = () => {
    if (username === "Pranjhi" && password === "123") {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  return (
    <div>
      <h1>
        <div>
          <label>Username</label>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}> Please Login</button>
        </div>
      </h1>
      {logged && (
        <span>
          <About />
        </span>
      )}
    </div>
  );
};
export default Login;
