import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { list, isSavedMovies } = props;
  const keyword = isSavedMovies ? localStorage.getItem("keySavedMovie") : localStorage.getItem("keyword");

  if (!list) {
    return keyword ? <span className="mov-card-list__text">Ничего не найдено</span> : null;
  } 

  return (
    <section className="mov-card-list">
      {list.map((item) => {
        return (
          <MoviesCard
            movie={item}
            key={item.id || item._id}
            onCardLike={props.onCardLike}
            isLiked={item.isLiked}
            deleteMovie={props.deleteMovie}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;
