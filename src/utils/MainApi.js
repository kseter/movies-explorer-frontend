export class Api {
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

getUserInfo(token) {
    // const token = localStorage.getItem('jwt');

    return fetch (`${this.baseUrl}/users/me`, {
        method: 'GET',
         headers: 
         {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json'
        },
    })
    .then(this._checkResponse);
}

setUserInfo(name, email, token) {
    // const token = localStorage.getItem('jwt');

    return fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(this._checkResponse)
}

getSavedMovies(token) {
    // const token = localStorage.getItem('jwt');

    return fetch(`${this.baseUrl}/movies`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json',
        }
    })
    .then(this._checkResponse)
}

saveMovie(data, token) {
    // const token = localStorage.getItem('jwt');

    return fetch(`${this.baseUrl}/movies`, {
        method: 'POST', 
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            trailerLink: data.trailerLink, 
            movieId: data.id
        })
    })
    .then(this._checkResponse)
}

deleteSavedMovie(dataId, token) {
    // const token = localStorage.getItem('jwt');

    return fetch(`${this.baseUrl}/movies/${dataId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json',
        },
    })
}

}

const mainApi = new Api({
    baseUrl: 'https://kseter.diploma.nomoredomainsrocks.ru',
})

export default mainApi