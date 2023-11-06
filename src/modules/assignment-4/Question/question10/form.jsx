import { Button, TextField } from "@mui/material";
import { useState } from "react";

const FormWithValidation = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = { ...formErrors };
  
      if (formData.name.trim() === '') {
        newErrors.name = 'Name is required';
        isValid = false;
      } else {
        newErrors.name = '';
      }
  
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!formData.email.match(emailPattern)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
      } else {
        newErrors.email = '';
      }
      if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      } else {
        newErrors.password = '';
      }
  
      setFormErrors(newErrors);
      return isValid;
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form submitted with data:', formData);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleInputChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleInputChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </form>
    );
  };
export default FormWithValidation;
