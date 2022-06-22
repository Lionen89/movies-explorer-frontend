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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerError, setRegisterError]= React.useState("");
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const tokenCheck = () => {
    const path = location.pathname;
      const jwt = localStorage.getItem("token");
      if (jwt !== null) {
        apiMain.checkToken(jwt)
        .then((data) => {
          setLoggedIn(true);
          path === "/" ? history.push('/movies') : history.push(path)
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
      }
      else return
    };
    tokenCheck();
  }, []);
  React.useEffect(() => {
    setIsLoading(true)
      apiMain.getProfileData()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(`Ошибка: ${err.status}`))
      .finally(() => setIsLoading(false));
  }
  , [loggedIn]);

  function handleLogoClick() {
    history.push("/");
  }
  function handleProfileClick() {
    history.push("/profile");
  }
  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem("token");
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
      }
    })
    .catch((err) => { console.log(`Ошибка: ${err}`)
    });
}

  const hadleRegister = (name, email, password) => {
    apiMain
      .registerUser(name, email, password)
      .then((data) => { 
        hadleLogin(data.email, password)
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  }
  const updateUser = (email, name) => {
    apiMain.updateUser(email, name)
    .then((user)=> {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="main-page">
        <div className="main-page__container">
          <Switch>
            <Route path="/signup">
              <Register onLogoClick={handleLogoClick} 
              hadleRegister={hadleRegister}
              registerError={registerError} />
            </Route>
            <Route path="/signin">
              <Login onLogoClick={handleLogoClick} 
                hadleLogin={hadleLogin}
                />
            </Route>
            <Route exact path="/"
              >
              <Main />
            </Route>
            <ProtectedRoute path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onLogoClick={handleLogoClick}
              onSignOut={signOut}
              onUpdateUser={updateUser}
              >
            </ProtectedRoute>
            <ProtectedRoute path="/movies"
            isLoading={isLoading} 
              loggedIn={loggedIn}
              component={Movies}
              onLogoClick={handleLogoClick}
              onProfileClick={handleProfileClick}
              >
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" 
              loggedIn={loggedIn}
              component={SavedMovies}
              onLogoClick={handleLogoClick}
              onProfileClick={handleProfileClick}
              >
            </ProtectedRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <InfoTooltip
          isOpen={isIsInfoTooltipOpen}
          onClose={closeInfoTooltip}
          registrationComplete={isRegistrationComplete}
        />
        </div>
      </div>
     </CurrentUserContext.Provider>
  );
}

export default App;
