import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import "./SavedMovies.css";

function SavedMovies(props) {
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const savedMovieList = checkboxStatus ?
      JSON.parse(localStorage.getItem("filteredSavedMovieList")) :
      JSON.parse(localStorage.getItem("savedMovieList"));

  React.useEffect(() => {
    props.setIsDataChange(false);
  }, [props.isDataChange]);

  const onCheckboxChange = () => {
      setCheckboxStatus(!checkboxStatus);
      props.shortMoviesFilter(savedMovieList, "savedMovieList");
  }

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
          setIsDataChange={props.setIsDataChange}
          isDataChange={props.isDataChange}
          onCheckboxChange={onCheckboxChange}
          checkboxStatus={checkboxStatus}
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
