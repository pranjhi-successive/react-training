import React, { useState } from "react";

const PasswordForm=()=> {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim() === "" || formData.password.trim() === "" || formData.confirmPassword.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
  
    if (formData.password === formData.confirmPassword) {
      alert("Verification is successful");
    } else {
      alert("Please check your password");
      setPasswordMatch(false);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        {!passwordMatch && <p>Passwords do not match!</p>}
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default PasswordForm;
