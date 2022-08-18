export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__name").textContent = this._data.name;
    this._element.querySelector(".card__phone").textContent = this._data.phone;
    this._element.querySelector(".card__mail").textContent = this._data.email;
    this._setEventListeners();
    return this._element;
  }
}
