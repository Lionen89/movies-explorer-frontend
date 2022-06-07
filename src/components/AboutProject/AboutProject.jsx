import "./AboutProject.css";
function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="title">О проекте</h2>
      <article className="about-project-description">
      <h3 className="about-project-title">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project-title">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project-text">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
      <p className="about-project-text">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
      </article>
      <article className="about-project-schedule">
          <p className="about-project-duration">1 неделя</p>
          <p className="about-project-duration">4 недели</p>
          <span className="about-project-duration-text">Back-end</span>
          <span className="about-project-duration-text">Front-end</span>
      </article>
    </section>
  );
}
export default AboutProject;
