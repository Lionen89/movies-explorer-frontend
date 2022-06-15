import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Profile.css";
function Profile(props) {
  return (
    <>
      <Header onLogoClick={props.onLogoClick}/>
      <section className="profile">
        <h2 className="profile__title">Привет, Илья!</h2>
        <div className="profile__text-container">
          <span className="profile__text-title">Имя</span>
          <span className="profile__text">Илья</span>
        </div>
        <div className="profile__text-container">
          <span className="profile__text-title">E-mail</span>
          <span className="profile__text">lionen89@yandex.ru</span>
        </div>
        <Link to="/signin" className="profile__link">Редактировать</Link>
        <Link to="/" className="profile__link">Выйти из аккаунта</Link>
      </section>
    </>
  );
}
export default Profile;
