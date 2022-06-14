import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  return (
    <>
      <Header
        onLogoClick={props.onLogoClick}
        onProfileClick={props.onProfileClick}
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}
export default SavedMovies;
