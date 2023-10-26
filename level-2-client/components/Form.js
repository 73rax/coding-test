import { useState } from "react";
import axios from "axios";

const PORT = process.env.NEXT_PUBLIC_API_PORT || "8000";

function Form() {

    // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  const [message, setMessage] = useState("");

  // Validation Functions

  const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };


  // Dynamic Error Function that updates the state 
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value)
          ? null
          : "Please enter a valid email address.",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value)
          ? null
          : "Your password needs to be at least 8 characters.",
      });
    }

    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value === formData.password ? null : "Passwords do not match.",
      });
    }


    // and updates the form's data object
    setFormData({ ...formData, [name]: value });
  };


  // Validation for the form, returns true if all elements in the array are null and false if at least one is not
  const validateForm = () => {
    // Check if any errors are present in the errors object
    return Object.values(errors).every((error) => error === null);
  };

  // Handling function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.password !== formData.confirmPassword
    ) {
      setMessage("Please fill out all fields correctly.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/user/register`,
        formData
      );

      setMessage("Signup successful");
    } catch (err) {
      console.error(err);
      setMessage("Signup failed");
    }
  };

  return (
    <div>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Type your email here..."
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Type your password here..."
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password here..."
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;
