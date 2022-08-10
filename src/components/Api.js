export class Api {
  constructor(id) {
    this.link = id.link;
    this.headers = id.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Ошибка");
  };

  getInitialCards() {
    return fetch(this.link, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  getMatch(input) {
    return fetch(`${this.link}?term=${input}`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }
}
