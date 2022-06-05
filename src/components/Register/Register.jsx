import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import './Register.css'

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
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
            className="auth__text"
            name="name"
            required
            minLength="2"
            maxLength="60"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="auth__form-field">
        <span className="auth_form-name">E-mail</span>
          <input
            type="email"
            className="auth__text"
            name="email"
            required
            minLength="2"
            maxLength="60"
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
