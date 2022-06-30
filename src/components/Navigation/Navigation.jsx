import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation(props) {
  const [isNavigationOpen, togleIsNavigation] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  function handleMenuClick() {
    togleIsNavigation(!isNavigationOpen);
  }

  const location = useLocation();

  if (location.pathname === "/" && !currentUser) {
    return (
      <div className="nav-auth">
        <Link to="/signup" className="nav-auth__link">
          Регистрация
        </Link>
        <Link to="/signin" className="nav-auth__link">
          Войти
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div
          className={`navigation__overlay ${
            isNavigationOpen ? "navigation_open" : ""
          }`}
        ></div>
        <div
          className={`navigation ${isNavigationOpen ? "navigation_open" : ""}`}
        >
          <Link to="/" className="navigation__link-film">
            Главная
          </Link>
          <Link
            to="/movies"
            className={`navigation__link-film ${
              location.pathname === "/movies"
                ? "navigation__link-film_active"
                : ""
            } ${location.pathname === "/" && !isNavigationOpen ? "navigation__link-main" : ""}`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`navigation__link-film ${
              location.pathname === "/saved-movies"
                ? "navigation__link-film_active"
                : ""
            } ${location.pathname === "/" && !isNavigationOpen ? "navigation__link-main" : ""}`}
          >
            Сохранённые фильмы
          </Link>
          <button
            onClick={props.onProfileClick}
            className={`navigation__link-profile ${
              location.pathname === "/" && !isNavigationOpen ? "navigation__link-profile_main" : ""
            }`}
          >
            Аккаунт
            <div className={`navigation__link-profile-profile-img ${
              location.pathname === "/" && !isNavigationOpen ? "navigation__link-profile-img_main" : ""
            }`}></div>
          </button>
        </div>
        <div className="navigation__burger-menu" onClick={handleMenuClick}>
          <span
            className={`navigation__burger-string ${
              isNavigationOpen ? "navigation__burger-string_open" : ""
            }`}
          ></span>
          <span
            className={`navigation__burger-string ${
              isNavigationOpen ? "navigation__burger-string_open" : ""
            }`}
          ></span>
          <span
            className={`navigation__burger-string ${
              isNavigationOpen ? "navigation__burger-string_open" : ""
            }`}
          ></span>
        </div>
      </>
    );
  }
}
export default Navigation;
