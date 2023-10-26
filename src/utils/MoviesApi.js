export class MoviesApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl
        this.headers = headers
      };

_checkResponse(res) {
    if(res.ok){
        return res.json()
        .then((res) => {
            return res
        })
    } else {
        return Promise.reject(`${res.status} ${res.statusText}`);
    }
};

getMovies() {
    return fetch(this.baseUrl, {
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then(this._checkResponse)
}
};

const movieApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default movieApi