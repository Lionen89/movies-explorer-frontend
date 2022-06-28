class MoviesApi {
    async _checkResults(res) {
        const result = await res.json();
        return res.ok ? result : Promise.reject(result)
      }

      getData() {
        return fetch( 'https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
          })
          .then(this._checkResults)
      };
}

export default MoviesApi;
