import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Switch, useHistory } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Profile from "../Profile/Profile"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import './App.css'


function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  function handleLogoClick(){
    history.push('/')
  }

    return (
        <CurrentUserContext.Provider value={currentUser}>
          <div className="main-page">
            <div className="main-page__container">
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/signup">
                  <Register onLogoClick={handleLogoClick} />
                </Route>
                <Route path="/signin">
                  <Login onLogoClick={handleLogoClick} />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                  <Route path="/movies">
                  <Movies onLogoClick={handleLogoClick} />
                </Route>
                  <Route path="/saved-movies">
                  <SavedMovies onLogoClick={handleLogoClick} />
                </Route>
              </Switch>
            </div>
          </div>
        </CurrentUserContext.Provider>
      )
}; 

export default App;
