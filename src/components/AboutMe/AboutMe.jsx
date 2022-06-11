import "./AboutMe.css";
function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__description">
          <h3 className="about-me__name">Илья</h3>
          <h3 className="about-me__about">Фронтенд-разработчик, 32 года</h3>
          <p className="about-me__text">
            Я живу в Санкт-Петербурге, закончил факультет аэрокосмических
            приборов и систем на кафедре микро и нанотехнологий СПбГУАП. Я
            увлекаюсь велоспортом и плаванием. С 2011 года работал инженером в
            компаниях, занимающихся облицовкой зданий. Недавно начал кодить.
            Делаю Pet-проекты и готов к перейти к более серьезным проектам.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100001774543665"
            className="about-me__link"
          >
            Facebook
          </a>
          <a href="https://github.com/Lionen89" className="about-me__link">
            Github
          </a>
        </div>
        <div className="about-me__img"></div>
      </div>
    </section>
  );
}
export default AboutMe;
