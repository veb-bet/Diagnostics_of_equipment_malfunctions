import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);

    if (!validateEmail(value)) {
      setUsernameError("Пожалуйста, введите действительный email-адрес.");
    } else if (!hasValidTLD(value)) {
      const suggestedTLD = getSuggestedTLD(value);
      setUsernameError(
        `Пожалуйста, добавьте domain ${suggestedTLD} к вашему email-адресу.`
      );
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasValidTLD = (email) => {
    const tldRegex = /(\.ru|\.com|\.edu)$/;
    return tldRegex.test(email);
  };

  const getSuggestedTLD = (email) => {
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
    return ".ru";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Вход</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Имя пользователя:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        {usernameError && <div className="error">{usernameError}</div>}

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Войти</button>
      </form>

      <p>
        Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default LoginPage;
