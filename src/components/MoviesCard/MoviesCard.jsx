import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { urlserver } from "../../utils/Constants";

function MoviesCard(props) {
  const location = useLocation();
  let image;
  props.movie.image.url
    ? (image = urlserver + props.movie.image.url)
    : (image = props.movie.image);
  function handleLikeClick() {
    if (location.pathname === "/movies" && props.isLiked) {
      props.deleteMovie(props.movie);
    } else if (location.pathname === "/saved-movies") {
      props.deleteMovie(props.movie);
    } else props.onCardLike(props.movie);
  }
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if(hours ===0) {return minutes + "м"}
    else {return hours + "ч " + minutes + "м"};
  }
  return (
    <article className="mov-card">
      <img src={image} alt="Постер фильма" className="mov-card__img" />
      <h2 className="mov-card__title">{props.movie.nameRU}</h2>
      <button
        className={`mov-card__like ${
          props.isLiked ? "mov-card__like_active" : ""
        }
        ${
          location.pathname === "/saved-movies"
            ? "mov-card__like_not-active"
            : ""
        }`}
        onClick={handleLikeClick}
      ></button>
      <span className="mov-card__duration">
        {getTimeFromMins(props.movie.duration)}
      </span>
    </article>
  );
}
export default MoviesCard;
