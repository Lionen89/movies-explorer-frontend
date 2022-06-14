import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "header_type_not-auth" : ""
      }`}
    >
      <img
        src={logo}
        alt="Логотип"
        className="header__logo"
        onClick={props.onLogoClick}
      />
      <Navigation onProfileClick={props.onProfileClick} />
    </header>
  );
}
export default Header;
