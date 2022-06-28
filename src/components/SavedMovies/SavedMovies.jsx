import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import "./SavedMovies.css";

function SavedMovies(props) {
  const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
  const savedMovieList = !checkboxStatus ? JSON.parse(localStorage.getItem("savedMovieList")) :
  JSON.parse(localStorage.getItem("filteredSavedMovieList"));

  React.useEffect(() => {
    props.setIsDataChange(false);
  }, [props.isDataChange]);

  if (props.isLoading) return <Preloader />;
  else
    return (
      <>
        <Header
          onLogoClick={props.onLogoClick}
          onProfileClick={props.onProfileClick}
        />
        <SearchForm
          onSearch={props.onSearch}
          shortMoviesFilter={props.shortMoviesFilter}
          setIsDataChange={props.setIsDataChange}
          isDataChange={props.isDataChange}
        />
        <MoviesCardList
          isLoading={props.isLoading}
          onSearch={props.onSearch}
          setIsDataChange={props.setIsDataChange}
          isDataChange={props.isDataChange}
          deleteMovie={props.deleteMovie}
          list={savedMovieList}
          isSavedMovies
        />
        <Footer />
      </>
    );
}
export default SavedMovies;
