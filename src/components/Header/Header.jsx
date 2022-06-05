import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
if(location.pathname === "/signin" || "/signup")
return(
    <></>
)
// if(location.pathname === "/signup")
// return(
//     <header className="header">
//       <img
//         src={logo}
//         alt="Логотип"
//         className="auth__logo"
//         onClick={props.onLogoClick}
//       />
//       <h2 className="auth__title">Добро пожаловать&#33;</h2>
//     </header>
// )

  return (
    <header className="header">
      <img src={logo} alt="Лого Место" className="header__logo" />
      <div className="header__links">
        <p className="header__text header__email">
          {location.pathname === "/" ? props.userEmail : ""}
        </p>
        <Link to="/sign-in" className="header__text header__link">
          {location.pathname === "/sign-up" ? "Войти" : ""}
        </Link>
        <Link to="/sign-up" className="header__text header__link">
          {location.pathname === "/sign-in" ? "Регистрация" : ""}
        </Link>
        <button
          onClick={props.onSignOut}
          className="header__text header__button"
        >
          {location.pathname === "/" ? "Выйти" : ""} */}
        </button>
      </div>
    </header>
  );
}
export default Header;
