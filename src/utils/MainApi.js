class MainApi {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }
  async _checkResults(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(result)
  }
  registerUser(name, email, password) {
    return fetch(`${this._url}/signup`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
      .then(this._checkResults);
  }
  loginUser(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResults);
  }
  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResults);
  }
  updateUser(email, name) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    }).then(this._checkResults);
  }

  getProfileData() {
    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          ...this._headers,
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(this._checkResults)
  };
  createMovie(...args) {
    return fetch(`${this._url}/movies/`, {
        method: 'POST',
        headers: {
          ...this._headers,
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(...args)
      })
      .then(this._checkResults)
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies/`, {
        method: 'GET',
        headers: {
          ...this._headers,
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(this._checkResults)
  };
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(this._checkResults)
  };
}

const apiMain = new MainApi("https://movies-explorer-back.herokuapp.com/", {
  "Content-Type": "application/json",
});
export default apiMain;
