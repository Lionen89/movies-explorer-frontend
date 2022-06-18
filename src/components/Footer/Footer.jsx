import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__nav">
        <p className="footer__copiright">&#169;2022</p>
        <ul className="footer__links">
          <li>
            <a
              target="_blank"
              href="https://practicum.yandex.ru/"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Lionen89"
              className="footer__link"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100001774543665"
              className="footer__link"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
