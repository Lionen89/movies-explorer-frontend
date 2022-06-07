import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Лого Место" className="header__logo" />

    </header>
  );
}
export default Header;
