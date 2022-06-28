import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();
  const keyword = localStorage.getItem("keyword");
  const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
  const movieList = checkboxStatus || checkboxStatus === null ? JSON.parse(localStorage.getItem("movieList")) :
  JSON.parse(localStorage.getItem("filteredMovieList"))
  const savedMovieList = checkboxStatus || checkboxStatus === null ? JSON.parse(localStorage.getItem("savedMovieList")) :
  JSON.parse(localStorage.getItem("filteredSavedMovieList"))
  React.useEffect(() => {
    props.setIsDataChange(false);
  }, [props.isDataChange]);

  if (location.pathname === "/saved-movies") {
    if (!savedMovieList) return <span></span>;
    else if (keyword && !savedMovieList) {
      return <span className="mov-card-list__text">Ничего не найдено</span>;
    }
    return (
      <section className="mov-card-list">
        {savedMovieList.map((item) => {
          let id;
          item.id ? (id = item.id) : (id = item._id);
          return (
            <MoviesCard
              movie={item}
              key={id}
              onCardLike={props.onCardLike}
              deleteMovie={props.deleteMovie}
            />
          );
        })}
      </section>
    );
  }
  else if (!movieList) return <span></span>;
    else if (keyword && !movieList) {
      return <span className="mov-card-list__text">Ничего не найдено</span>;
    }
    return (
      <section className="mov-card-list">
        {movieList.map((item) => {
          const isLiked =  savedMovieList !== null ? savedMovieList.some((i) => i.nameRU === item.nameRU) : false
          return (
            <MoviesCard
              movie={item}
              key={item.id}
              onCardLike={props.onCardLike}
              isLiked={isLiked}
              deleteMovie={props.deleteMovie}
            />
          );
        })}
      </section>
    );
}
export default MoviesCardList;
