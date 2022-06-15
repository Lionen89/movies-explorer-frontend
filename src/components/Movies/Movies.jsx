import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";

import "./Movies.css";

function Movies(props) {
  return (
    <>
      <Header
        onLogoClick={props.onLogoClick}
        onProfileClick={props.onProfileClick}
      />
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
      <Footer />
    </>
  );
}
export default Movies;
