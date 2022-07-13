import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import {
  validationMessage,
  validationEmailMessage,
  regex,
  regexEmail,
} from "../../utils/Constants";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [isValidName, setIsValidName] = React.useState(true);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [isFormValid, setValidityForm] = React.useState(false);
  React.useEffect(() => {
    const isCurrent = email === currentUser.email && name === currentUser.name;
    if (isValidEmail && isValidName && !isCurrent) {
      setValidityForm(true);
    } else {
      setValidityForm(false);
    }
  }, [isValidEmail, email, name, isValidName]);
  function handleNameChange(e) {
    const newName = e.target.value;
    setName(newName);
    setIsValidName(true);
    setErrorName("");
    if (!e.target.validity.valid) {
      setIsValidName(false);
      setErrorName(e.target.validationMessage);
    } else if (!regex.test(newName)) {
      setIsValidName(false);
      setErrorName(validationMessage);
    }
  }

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(true);
    setErrorEmail("");
    if (!e.target.validity.valid) {
      setIsValidEmail(false);
      setErrorEmail(e.target.validationMessage);
    } else if (!regexEmail.test(newEmail)) {
      setIsValidEmail(false);
      setErrorEmail(validationEmailMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(email, name);
  }
  return (
    <>
      <Header onLogoClick={props.onLogoClick} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__text-container">
            <span className="profile__text-title">Имя</span>
            <input
              type="name"
              name="name"
              required
              minLength="2"
              maxLength="60"
              className={`profile__text ${
                !isValidName ? "profile__text_type_error" : ""
              }`}
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
          <span
            className={`profile__text-error ${
              !isValidName ? "profile__text-error_active" : ""
            }`}
          >
            {errorName}
          </span>
          <div className="profile__text-container">
            <span className="profile__text-title">E-mail</span>
            <input
              name="email"
              required
              minLength="2"
              maxLength="60"
              className={`profile__text ${
                !isValidEmail ? "profile__text_type_error" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <span
            className={`profile__text-error ${
              !isValidEmail ? "profile__text-error_active" : ""
            }`}
          >
            {errorEmail}
          </span>
          <button
            className={`profile__button ${
              !isFormValid ? "profile__button_disable" : ""
            }`}
            disabled={!isFormValid}
          >
            Редактировать
          </button>
          <Link to="/" className="profile__link" onClick={props.onSignOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}
export default Profile;
