import "./MoviesCard.css";
import poster from "../../images/pic__COLOR_pic.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const location = useLocation();

  return (
       <article className="mov-card">
          <img src={poster} alt="Постер фильма" className="mov-card__img" />
          <h2 className="mov-card__title">В погоне за Бенкси</h2>
          <button className={`mov-card__like ${
            location.pathname === "/saved-movies"
              ? "mov-card__like_not-active"
              : ""
          }`}></button>
          <span className="mov-card__duration">1ч 24м</span>
        </article>
  );
}
export default MoviesCard;
