import "./index.css";
import { formSearch, inputName } from "../utils/constants.js";
import { request } from "../utils/request";

import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { Api } from "../components/Api";

const popup = new Popup(".popup");
popup.setEventListeners();

const api = new Api(request);
api
  .getInitialCards()
  .then((cards) => {
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(item) {
  const card = new Card(item, ".card-template", () => {
    popup.open({
      name: item.name,
      phone: item.phone,
      email: item.email,
      hire_date: item.hire_date,
      position_name: item.position_name,
      department: item.department,
      address: item.address,
    });
  });

  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".cards__container"
);

function startSearch() {
  inputName.addEventListener("input", () => {
    api
      .getMatch(inputName.value)
      .then((cards) => {
        cardList.renderFilteredItems(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  formSearch.addEventListener("submit", (evt) => {
    evt.preventDefault();
    api
      .getMatch(inputName.value)
      .then((cards) => {
        cardList.renderFilteredItems(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function stopSearch() {
  inputName.removeEventListener("input", () => {});
  formSearch.removeEventListener("submit", function (evt) {
    evt.preventDefault();
  });
}

inputName.addEventListener("focus", () => {
  startSearch();
});

inputName.addEventListener("blur", () => {
  stopSearch();
});
