import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidName, setIsValidName] = React.useState(true);
  const [errorName, setErrorName] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState("");
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [errorPassword, setErrorPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
    if (!setIsValidName(e.target.validity.valid)) {
      setErrorName(e.target.validationMessage);
    }
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!setIsValidEmail(e.target.validity.valid)) {
      setErrorEmail(e.target.validationMessage);
    }
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (!setIsValidPassword(e.target.validity.valid)) {
      setErrorPassword(e.target.validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.hadleRegister(name, email, password);
  }

  return (
    <div className="auth">
      <img
        src={logo}
        alt="Логотип"
        className="auth__logo"
        onClick={props.onLogoClick}
      />
      <h2 className="auth__title">Добро пожаловать&#33;</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__form-field">
          <span className="auth_form-name">Имя</span>
          <input
            type="name"
            className={`auth__text ${
              !isValidName ? "auth__text_type_error" : ""
            }`}
            name="name"
            required
            minLength="2"
            maxLength="60"
            value={name}
            onChange={handleNameChange}
          />
          <span
            className={`auth__text-error ${
              !isValidName ? "auth__text-error_active" : ""
            }`}
          >
            {errorName}
          </span>
        </label>
        <label className="auth__form-field">
          <span className="auth_form-name">E-mail</span>
          <input
            type="email"
            className={`auth__text ${
              !isValidEmail ? "auth__text_type_error" : ""
            }`}
            name="email"
            required
            minLength="2"
            maxLength="60"
            value={email}
            onChange={handleEmailChange}
          />
          <span
            className={`auth__text-error ${
              !isValidEmail ? "auth__text-error_active" : ""
            }`}
          >
            {errorEmail}
          </span>
        </label>
        <label className="auth__form-field">
          <span className="auth_form-name">Пароль</span>
          <input
            type="password"
            className={`auth__text ${
              !isValidPassword ? "auth__text_type_error-password" : ""
            }`}
            id="password-input"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
            minLength="6"
          />
          <span
            className={`auth__text-error ${
              !isValidPassword ? "auth__text-error_active" : ""
            }`}
          >
            {errorPassword}
          </span>
        </label>
        <button type="submit" className="auth__save-button">
          Зарегистрироваться
        </button>
        <div className="auth__tooltips">
          <span className="auth__tooltip">Уже зарегистрированы?</span>
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Register;
