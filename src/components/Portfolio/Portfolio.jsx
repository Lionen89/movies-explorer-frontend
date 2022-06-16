import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <article className="portfolio__link">
        <a
          target="_blank"
          href="https://lionen89.github.io/how-to-learn/"
          className="portfolio__link-text"
        >
          Статичный сайт
        </a>
        <div className="portfolio__arrow"></div>
      </article>
      <article className="portfolio__link">
        <a
          target="_blank"
          href="https://lionen89.github.io/russian-travel/index.html"
          className="portfolio__link-text"
        >
          Адаптивный сайт
        </a>
        <div className="portfolio__arrow"></div>
      </article>
      <article className="portfolio__link">
        <a
          target="_blank"
          href="https://lionen89.github.io/mesto/"
          className="portfolio__link-text"
        >
          Одностраничное приложение
        </a>
        <div className="portfolio__arrow"></div>
      </article>
    </section>
  );
}
export default Portfolio;
