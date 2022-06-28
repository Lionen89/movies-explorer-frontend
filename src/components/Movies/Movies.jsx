import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import useWindowDimensions from '../../hooks/screenSizeDetector';

function Movies(props) {
  if (props.isLoading) return <Preloader />;
  else {
    return <MoviesBody {...props} />
  }
}

function MoviesBody(props) {
  const [index, setIndex] = React.useState(12);
  const checkboxStatus = JSON.parse(localStorage.getItem("checkboxStatus"));
  const windowDimensions = useWindowDimensions();

  const movieList = (!checkboxStatus
    ? JSON.parse(localStorage.getItem("movieList"))
    : JSON.parse(localStorage.getItem("filteredMovieList"))) || [];
  
  const savedMovieList = (!checkboxStatus ? JSON.parse(localStorage.getItem("savedMovieList")) :
  JSON.parse(localStorage.getItem("filteredSavedMovieList"))) || [];

  const preparedMoviesList = movieList.map(item => {
    return {
      ...item,
      isLiked: savedMovieList.some((i) => i.nameRU === item.nameRU)
    };
  })

  const [list, setList] = React.useState(preparedMoviesList.slice(0, 12));
  const [showMore, setShowMore] = React.useState(preparedMoviesList.length > 12);

  const loadMore = () => {
    const newIndex = index + 12;
    const newShowMore = newIndex < preparedMoviesList.length - 1;
    const newList = list.concat(preparedMoviesList.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  
  React.useEffect(() => {
    props.setIsDataChange(false);
  }, [props.isDataChange]);

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
        list={list}
      />
      {showMore && <MoreButton loadMore={loadMore} />}
      <Footer />
    </>
  );
}

export default Movies;
