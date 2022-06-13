import logo from "../../images/logo.svg";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";

function Header(props) {
console.log(props);

  return (
    <header className="header">
      <img
        src={logo}
        alt="Лого Место"
        className="header__logo"
        onClick = {props.onLogoClick}
      />
      <ul className="header__nav-auth">
        <Link to="/signup" className="header__auth__link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__auth__link">
          Войти
        </Link>
      </ul>
    </header>
  );
}
export default Header;
