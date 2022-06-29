import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import apiMain from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { urlserver } from "../../utils/Constants";

import "./App.css";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState("");
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDataChange, setIsDataChange] = React.useState(false);
  const [firstLoading, setFirstLoading] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  React.useEffect(() => {
    const tokenCheck = () => {
      const path = location.pathname;
      const jwt = localStorage.getItem("token");

      if (jwt !== null) {
        setIsLoading(true);
        apiMain
          .checkToken(jwt)
          .then((user) => {
            setCurrentUser(user);
            setLoggedIn(true);
            path === "/signin" ? history.push("/movies") : history.push(path);
          })
          .catch((err) => console.log(`Ошибка: ${err}`))
          .finally(() => {
            setIsLoading(false);
            setFirstLoading(true);
          });
      } else setFirstLoading(true);
    };

    tokenCheck();
  }, [loggedIn]);

  React.useEffect(() => {
    if (!currentUser) {
      return;
    }

    setIsLoading(true);

    const GetMoveis = new MoviesApi();

    Promise.all([GetMoveis.getData(), apiMain.getSavedMovies()])
        .then(([movies, likedMovies]) => {
          const savedMovieList = likedMovies.filter((item) => {
            return item.owner === currentUser._id;
          });

          setSavedMovies(savedMovieList);

          localStorage.setItem("savedMovieList", JSON.stringify(savedMovieList));

          setMovies(movies.map(item => {
            return {
              ...item,
              isLiked: Boolean(savedMovieList.find(i => i.nameRU === item.nameRU)),
            }
          }));

          setIsDataChange(true);
        })
        .catch((err) => console.log(`Ошибка: ${err.status}`))
        .finally(() => {
          setIsLoading(false);
        });
  }, [currentUser]);

  function handleLogoClick() {
    history.push("/");
  }
  function handleProfileClick() {
    history.push("/profile");
  }
  function signOut() {
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser();
    history.push("/");
  }

  const hadleLogin = (email, password) => {
    apiMain
      .loginUser(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          history.push("/movies");
          setError("");
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setError(err.message);
      });
  };

  const hadleRegister = (name, email, password) => {
    apiMain
      .registerUser(name, email, password)
      .then((data) => {
        hadleLogin(data.email, password);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setError(err.message);
      });
  };
  const updateUser = (email, name) => {
    setIsLoading(true);
    apiMain
      .updateUser(email, name)
      .then((user) => {
        setCurrentUser(user);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }
  function searchMovie(keyword) {
    const movieList = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyword);
    });
    const shortMoviesList = movieList.filter((item) => {
      return item.duration <= 40;
    });

    localStorage.setItem("keyword", keyword);
    localStorage.setItem("movieList", JSON.stringify(movieList));
    localStorage.setItem("filteredMovieList", JSON.stringify(shortMoviesList));

    setIsDataChange(true);
  }
  function searchSavedMovie(keyword) {
    const savedMovieList = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyword);
    });

    localStorage.setItem("keySavedMovie", keyword);
    localStorage.setItem("savedMovieList", JSON.stringify(savedMovieList));

    setIsDataChange(true);
  }
  function toggleMovielike(id, isLike) {
    const newMovieList = JSON.parse(
        localStorage.getItem("movieList")
    ).map(item => item.id === id ? {
      ...item,
      isLiked: isLike ? true : false
    } : item);

    setMovies(newMovieList);

    localStorage.setItem("movieList", JSON.stringify(newMovieList));
  }
  function toggleFilteredMovielike(id, isLike) {
    const isSavedMoviesPage = location.pathname === "/saved-movies";
    const newMovieList = JSON.parse(
        isSavedMoviesPage ?
            localStorage.getItem("filteredSavedMovieList") :
            localStorage.getItem("filteredMovieList")
    ).map(item => item.id === id ? {
      ...item,
      isLiked: isLike ? true : false
    } : item);

    isSavedMoviesPage ?
        localStorage.setItem("filteredSavedMovieList", JSON.stringify(newMovieList)) :
        localStorage.setItem("filteredMovieList", JSON.stringify(newMovieList));
  }
  function setMovieLike(movie) {
    let country;
    let nameEN;
    !movie.country ? (country = "unknown") : (country = movie.country);
    const director = movie.director;
    const duration = movie.duration;
    const year = movie.year;
    const description = movie.description;
    const image = urlserver + movie.image.url.slice(1);
    const trailerLink = movie.trailerLink;
    const thumbnail = urlserver + movie.image.formats.thumbnail.url;
    const movieId = movie.id;
    const nameRU = movie.nameRU;
    !movie.nameEN ? (nameEN = "unknown") : (nameEN = movie.nameEN);
    apiMain
      .createMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      })
      .then((data) => {
        const newSavedMovieList = JSON.parse(
          localStorage.getItem("savedMovieList")
        );
        const isFiltered = JSON.parse(localStorage.getItem("checkboxStatus"));

        isFiltered ? toggleFilteredMovielike(data.movieId, true) : toggleMovielike(data.movieId, true);

        newSavedMovieList.push(data);
        setSavedMovies(newSavedMovieList);

        localStorage.setItem("savedMovieList", JSON.stringify(newSavedMovieList));

        setIsDataChange(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function deleteMovie(movie) {
    let id;
    movie.id
      ? savedMovies.find((item) => {
          if (item.nameRU.includes(movie.nameRU)) return (id = item._id);
          else return (id = "");
        })
      : (id = movie._id);

    apiMain
      .deleteMovie(id)
      .then((data) => {
        const isFiltered = JSON.parse(localStorage.getItem("checkboxStatus"));
        const newSavedMovieList = savedMovies.filter((item) => {
          return !item._id.includes(id);
        });

        localStorage.setItem(
          "savedMovieList",
          JSON.stringify(newSavedMovieList)
        );

        setSavedMovies(newSavedMovieList);

        isFiltered ? toggleFilteredMovielike(data.movieId, false) : toggleMovielike(data.movieId, false);

        setIsDataChange(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function shortMoviesFilter(list, nameList) {
    setCheckboxStatus(!checkboxStatus);

    const filteredList = list.filter((item) => {
      return item.duration <= 40
    })

    localStorage.setItem("checkboxStatus", !checkboxStatus);

    if (nameList === "movieList") {
      localStorage.setItem("filteredMovieList", JSON.stringify(filteredList))}
    else { 
      localStorage.setItem("filteredSavedMovieList", JSON.stringify(filteredList))
    }

    setIsDataChange(true);
  }

  return !firstLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="main-page">
        <div className="main-page__container">
          <Switch>
            <Route path="/signup">
              <Register
                onLogoClick={handleLogoClick}
                hadleRegister={hadleRegister}
              />
            </Route>
            <Route path="/signin">
              <Login onLogoClick={handleLogoClick} hadleLogin={hadleLogin} />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onLogoClick={handleLogoClick}
              onSignOut={signOut}
              onUpdateUser={updateUser}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/movies"
              isLoading={isLoading}
              loggedIn={loggedIn}
              isDataChange={isDataChange}
              component={Movies}
              onLogoClick={handleLogoClick}
              onProfileClick={handleProfileClick}
              onSearch={searchMovie}
              setIsDataChange={setIsDataChange}
              onCardLike={setMovieLike}
              deleteMovie={deleteMovie}
              shortMoviesFilter={shortMoviesFilter}
            ></ProtectedRoute>
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              onLogoClick={handleLogoClick}
              onProfileClick={handleProfileClick}
              isDataChange={isDataChange}
              setIsDataChange={setIsDataChange}
              deleteMovie={deleteMovie}
              onSearch={searchSavedMovie}
              shortMoviesFilter={shortMoviesFilter}
            ></ProtectedRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeInfoTooltip}
            error={error}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
