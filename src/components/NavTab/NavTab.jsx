import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <section className="navtab">
          <Link to="#about" className="nav__link">О проекте
          </Link>
          <Link to="#tech" className="nav__link">Технологии
          </Link>
          <Link to="#about-project" className="nav__link">Студент 
          </Link>
    </section>
  );
}
export default NavTab;
