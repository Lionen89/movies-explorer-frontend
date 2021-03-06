import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import  { validationEmailMessage, regexEmail } from "../../utils/Constants"

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState("");
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [errorPassword, setErrorPassword] = React.useState("");
  const [isFormValid, setValidityForm] = React.useState(false);

  function handleEmailChange(e) {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setIsValidEmail(true);
    setErrorEmail("");
    if (!e.target.validity.valid) {
      setIsValidEmail(false);
      setErrorEmail(e.target.validationMessage);
    } else if (!regexEmail.test(currentEmail)) {
      setIsValidEmail(false);
      setErrorEmail(validationEmailMessage);
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
    props.hadleLogin(email, password);
  }
  React.useEffect(() => {
    if (isValidEmail && email && password && isValidPassword) {
      setValidityForm(true);
    } else {
      setValidityForm(false);
    }
  }, [isValidEmail,email,password, isValidPassword]);

  return (
    <div className="auth">
      <img
        src={logo}
        alt="Логотип"
        className="auth__logo"
        onClick={props.onLogoClick}
      />
      <h2 className="auth__title">Рады видеть&#33;</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
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
            maxLength="30"
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
        <button
          type="submit"
          className={`auth__save-button ${
            !isFormValid ? "auth__save-button_disable" : ""
          }`}
          disabled={!isFormValid}
        >
          Войти
        </button>
        <div className="auth__tooltips">
          <span className="auth__tooltip">Ещё не зарегистрированы?</span>
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
