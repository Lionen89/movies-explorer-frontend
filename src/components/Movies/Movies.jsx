import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";


import "./Movies.css";

function Movies(props) {
  return (
    <>
      <Header onLogoClick={props.onLogoClick} />
      <SearchForm />
      {/* <FilterCheckbox />
      <MoviesCardList /> */}
      <Footer />
    </>
  );
}
export default Movies;
