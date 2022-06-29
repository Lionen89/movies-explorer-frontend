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

function setInitialLimit(width) {
    if (width > 960) {
        return 12;
    } else if (width > 490) {
        return 8;
    }

    return 5;
}

function countMoreNumber(width) {
    return width > 960 ? 3 : 2;
}

function MoviesBody(props) {
  const [checkboxStatus, setCheckboxStatus] = React.useState(JSON.parse(localStorage.getItem("checkboxStatus")));
  const windowWidth = useWindowDimensions().width;
  const initialLimit = setInitialLimit(windowWidth);
  const [index, setIndex] = React.useState(initialLimit);
  const [loadMoreNumber, setLoadMoreNumber] = React.useState(countMoreNumber(windowWidth));

  React.useEffect(() => {
      setLoadMoreNumber(countMoreNumber(windowWidth))
  }, [windowWidth]);

  const moviesList = (!checkboxStatus
    ? JSON.parse(localStorage.getItem("movieList"))
    : JSON.parse(localStorage.getItem("filteredMovieList"))) || [];

  const [list, setList] = React.useState(moviesList.slice(0, index));
  const [showMore, setShowMore] = React.useState(moviesList.length > index);

  const loadMore = () => {
    const newIndex = index + loadMoreNumber;
    const newShowMore = newIndex < moviesList.length - 1;
    const newList = list.concat(moviesList.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  const onCheckboxChange = () => {
      setCheckboxStatus(!checkboxStatus);
      props.shortMoviesFilter(moviesList, "movieList");
  }
  
  React.useEffect(() => {
    props.setIsDataChange(false);

    if (moviesList.length !== list.length) {
        setIndex(initialLimit);
        setList(moviesList.slice(0, index));
        setShowMore(moviesList.length > index)
    } else {
        setList(list => list.map(item => moviesList.find(i => i.id === item.id)));
    }
  }, [props.isDataChange]);

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
