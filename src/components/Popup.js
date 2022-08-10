export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._name = this._popupElement.querySelector(".popup__name");
    this._phone = this._popupElement.querySelector(".popup__value_phone");
    this._email = this._popupElement.querySelector(".popup__value_email");
    this._hireDate = this._popupElement.querySelector(
      ".popup__value_hire-date"
    );
    this._position = this._popupElement.querySelector(".popup__value_position");
    this._department = this._popupElement.querySelector(
      ".popup__value_department"
    );
    this._additional = this._popupElement.querySelector(".popup__additional");
  }

  open(data) {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._name.textContent = data.name;
    this._phone.textContent = data.phone;
    this._email.textContent = data.email;
    this._hireDate.textContent = data.hire_date;
    this._position.textContent = data.position_name;
    this._department.textContent = data.department;
    this._additional.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Адрес: ${data.address}`;
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
