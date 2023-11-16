import React, { useState } from "react";
function ControlledForm() {
  const [form, setForm] = useState({
    name: " ",
    filled: false,
    email: " ",
    phoneNumber: " ",
    gender: " ",
  });
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newForm = Object.assign({}, form);
    if (type === "checkbox") {
      newForm[name] = checked;
    } else {
      newForm[name] = value;
    }
    setForm(newForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Gender:</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>
            <label>Information Is Correct</label>
            <input
              type="checkbox"
              name="filled"
              checked={form.filled}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default ControlledForm;
