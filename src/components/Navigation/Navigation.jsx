import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation(props) {
  const location = useLocation();
  if (location.pathname === "/") {
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
      <div className="navigation__overlay"></div>
      <div className="navigation">
        <Link to="/" className="navigation__link-film">
          Главная
        </Link>
        <Link
          to="/movies"
          className={`navigation__link-film ${
            location.pathname === "/movies"
              ? "navigation__link-film_active"
              : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`navigation__link-film ${
            location.pathname === "/saved-movies"
              ? "navigation__link-film_active"
              : ""
          }`}
        >
          Сохранённые фильмы
        </Link>
        <button
          onClick={props.onProfileClick}
          className="navigation__link_profile"
        >
          Аккаунт
          <div className="navigation__link_profile_profile-img"></div>
        </button>
      </div>
      <div class="navigation__burger-menu">
          <span className="navigation__burger-string"></span>
        </div>
      </>
    );
  }
}
export default Navigation;
