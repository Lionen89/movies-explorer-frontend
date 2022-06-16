import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <a href="#about" className="nav__link">
        О проекте
      </a>
      <a href="#techs" className="nav__link">
        Технологии
      </a>
      <a href="#about-me" className="nav__link">
        Студент
      </a>
    </section>
  );
}
export default NavTab;
