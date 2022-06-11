import "./Techs.css";
function Techs() {
  return (
    <section className="techs" id='techs'>
      <div className="techs__line"></div>
      <h2 className="techs__title">Технологии</h2>
      <h2 className="techs__description">7 технологий</h2>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__stack">
        <li className="techs__stack-text">HTML</li>
        <li className="techs__stack-text">CSS</li>
        <li className="techs__stack-text">JS</li>
        <li className="techs__stack-text">React</li>
        <li className="techs__stack-text">Git</li>
        <li className="techs__stack-text">Express.js</li>
        <li className="techs__stack-text">mongoDB</li>
      </ul>
    </section>
  );
}
export default Techs;
