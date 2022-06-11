import "./AboutProject.css";
function AboutProject() {
  return (
    <section className="about-project" id='about'>
      <h2 className="title">О проекте</h2>
      <article className="about-project__description">
      <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__text">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
      <p className="about-project__text">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
      </article>
      <article className="about-project__schedule">
          <p className="about-project__duration">1 неделя</p>
          <p className="about-project__duration">4 недели</p>
          <span className="about-project__duration-text">Back-end</span>
          <span className="about-project__duration-text">Front-end</span>
      </article>
    </section>
  );
}
export default AboutProject;
