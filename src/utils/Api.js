export default class Api {
    constructor(serverData) {
        this._URL = serverData.URL;
        this._headers = serverData.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }

    getUserInfo() {
        return fetch(this._URL + `/users/me`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(this._URL + `/cards`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    setNewUserInfo(data) {
        return fetch(this._URL + `/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            })
        })
            .then(this._checkResponse);
    }

    setUserAvatar(data) {
        return fetch(this._URL + `/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(this._checkResponse);
    }

    addNewCard(data) {
        return fetch(this._URL + `/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
            .then(this._checkResponse);
    }

    deleteCard(cardId) {
        return fetch(this._URL + `/cards/` + cardId, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    putLike(cardId) {
        return fetch(this._URL + `/cards/` + cardId + `/likes`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    removeLike(cardId) {
        return fetch(this._URL + `/cards/` + cardId + `/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(this._URL + `/cards/` + cardId + `/likes`, {
            method: `${!isLiked ? "DELETE" : "PUT"}`,
            headers: this._headers,
        })
            .then(this._checkResponse);
    }
}

export const api = new Api({
    URL: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
        authorization: '80ee6d55-5ae2-4752-be1d-625f4a4b319d',
        'Content-Type': 'application/json',
    }
})