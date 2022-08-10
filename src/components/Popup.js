export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._image = this._popupElement.querySelector(".popup__photo");
    this._title = this._popupElement.querySelector(".popup__caption");
  }

  open(data) {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._image.src = data.link;
    this._title.textContent = data.name;
    this._image.alt = data.name;
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target === evt.currentTarget
      ) {
        this.close();
      }
    });
  }
}
