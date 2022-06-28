import React from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom";

function FilterCheckbox(props) {
  const location = useLocation();
  const savedMovieList = JSON.parse(localStorage.getItem("savedMovieList"));
  const movieList = JSON.parse(localStorage.getItem("movieList"));

  function handleClick() {
    location.pathname === "/saved-movies" ? props.shortMoviesFilter(savedMovieList, "savedMovieList") :
    props.shortMoviesFilter(movieList, "movieList")
  }

  return (
    <article>
      <label className="filter-checkbox">
        <input type="checkbox" className="filter-checkbox__input" checked={props.checkboxStatus}/>
        <span className= {`filter-checkbox__custom-checkbox ${
          props.checkboxStatus ? "filter-checkbox__custom-checkbox_active" : ""
        }
        `}
        onClick={handleClick}></span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </article>
  );
}
export default FilterCheckbox;
