import "./NavTab.css";

function NavTab() {
  return (
    <section>
      <ul className="navtab">
        <li className="nav__link">
          <a className="nav__link_text" href="#about">
            О проекте
          </a>
        </li>
        <li className="nav__link">
          <a className="nav__link_text" href="#techs">
            Технологии
          </a>
        </li>
        <li className="nav__link">
          <a className="nav__link_text" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
export default NavTab;
