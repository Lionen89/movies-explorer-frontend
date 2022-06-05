import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.png";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.hadleLogin(password, email);
  }

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
            className="auth__text"
            name="email"
            required
            minLength="2"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="auth__form-field">
          <span className="auth_form-name">Пароль</span>
          <input
            type="password"
            className="auth__text"
            id="password-input"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
            minLength="6"
          />
        </label>
        <button type="submit" className="auth__save-button">
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
