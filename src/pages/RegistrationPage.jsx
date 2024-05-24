import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Validate the email format
    if (!validateEmail(value)) {
      setEmailError("Пожалуйста, введите действительный email-адрес.");
    } else if (!hasValidTLD(value)) {
      const suggestedTLD = getSuggestedTLD(value);
      setEmailError(
        `Пожалуйста, добавьте domain ${suggestedTLD} к вашему email-адресу.`
      );
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasValidTLD = (email) => {
    // Check if the email address has a valid top-level domain (.ru, .com, or .edu)
    const tldRegex = /(\.ru|\.com|\.edu)$/;
    return tldRegex.test(email);
  };

  const getSuggestedTLD = (email) => {
    // Determine the suggested TLD based on the email address
    if (email.includes("@")) {
      const [, domain] = email.split("@");
      if (domain.endsWith(".ru")) {
        return ".ru";
      } else if (domain.endsWith(".com")) {
        return ".com";
      } else if (domain.endsWith(".edu")) {
        return ".edu";
      }
    }
    return ".ru"; // Default suggestion
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Navigate to the MainPage component
    navigate("/");
  };

  return (
    <div className="registration-container">
      <h1>Регистрация</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="email">Электронная почта:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <div className="error">{emailError}</div>}

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="confirmPassword">Подтвердите пароль:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>

      <p>
        Есть аккаунта? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
