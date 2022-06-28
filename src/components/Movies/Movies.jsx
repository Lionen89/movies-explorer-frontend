import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
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
          isDataChange={props.isDataChange}
          setIsDataChange={props.setIsDataChange}
          onCardLike={props.onCardLike}
          deleteMovie={props.deleteMovie}
        />
        <MoreButton />
        <Footer />
      </>
    );
}
export default Movies;
