import "./index.css";
import {
  validationObject,
  buttonEdit,
  buttonAdd,
  buttonAvatar,
  formEdit,
  formAdd,
  formAvatar,
  inputName,
  inputPosition,
  popupEditSubmit,
  popupAddSubmit,
  popupAvatarSubmit,
  popupConfirmSubmit,
  currentId,
  profileName,
  profilePosition,
  profileAvatar,
} from "../utils/constants.js";

const popup = document.querySelector(".popup");
const cardsContainer = document.querySelector(".cards__container");

import { req } from "../utils/req";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";
import { Api } from "../components/Api";

const api = new Api(req);
api
  .getInitialCards()
  .then((cards) => {
    console.log(cards);
    // userInfo.setUserAvatar(data.avatar);
    // userInfo.setUserInfo(data.name, data.about);
    cardList.renderItems(cards.reverse());
    // cards.forEach((item) => {
    //   cardList.addItem(item);
    // });
  })
  .catch((err) => {
    console.log(err);
  });

// function showLoading(isLoading, button, defaultText) {
//   if (isLoading) {
//     button.textContent = "Сохранение...";
//   } else {
//     button.textContent = defaultText;
//   }
// }

function createCard(item) {
  const card = new Card(item, ".card-template", () => {
    popup.open({ name: item.name, link: item.link });
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

// const userInfo = new UserInfo(profileName, profilePosition, profileAvatar);

// const like = (id) => api.like(id);
// const dislike = (id) => api.dislike(id);

// const editFormValidator = new FormValidator(validationObject, formEdit);
// editFormValidator.enableValidation();

// const addFormValidator = new FormValidator(validationObject, formAdd);
// addFormValidator.enableValidation();

// const avatarFormValidator = new FormValidator(validationObject, formAvatar);
// avatarFormValidator.enableValidation();

// const imagePopup = new PopupWithImage(".popup_type_image");
// imagePopup.setEventListeners();

// const confirmPopup = new PopupWithConfirmation(".popup_type_confirm");
// confirmPopup.setEventListeners();

// const newAvatar = new PopupWithForm({
//   popupSelector: ".popup_type_avatar",
//   handleFormSubmit: (formData) => {
//     showLoading(true, popupAvatarSubmit);
//     api
//       .addNewAvatar(formData.link)
//       .then((link) => {
//         userInfo.setUserAvatar(link.avatar);
//         newAvatar.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         showLoading(false, popupAvatarSubmit, "Сохранить");
//       });
//   },
// });
// newAvatar.setEventListeners();

// const newProfile = new PopupWithForm({
//   popupSelector: ".popup_type_edit",
//   handleFormSubmit: (formData) => {
//     showLoading(true, popupEditSubmit);
//     api
//       .setUserInfo(formData.name, formData.position)
//       .then(() => {
//         userInfo.setUserInfo(formData.name, formData.position);
//         newProfile.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         showLoading(false, popupEditSubmit, "Сохранить");
//       });
//   },
// });
// newProfile.setEventListeners();

// const newCard = new PopupWithForm({
//   popupSelector: ".popup_type_add",
//   handleFormSubmit: (formData) => {
//     showLoading(true, popupAddSubmit);
//     api
//       .addNewCard(formData.place, formData.link)
//       .then((data) => {
//         cardList.addItem(createCard(data));
//         newCard.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         showLoading(false, popupAddSubmit, "Создать");
//       });
//   },
// });
// newCard.setEventListeners();

// const editProfile = () => {
//   inputName.value = userInfo.getUserInfo().profileNameInput;
//   inputPosition.value = userInfo.getUserInfo().profileInfoInput;
//   newProfile.open();
//   editFormValidator.resetValidation(popupEditSubmit);
// };

// // edit button listener
// buttonEdit.addEventListener("click", editProfile);

// // add button listener
// buttonAdd.addEventListener("click", () => {
//   newCard.open();
//   addFormValidator.resetValidation(popupAddSubmit);
// });

// // edit avatar listener
// buttonAvatar.addEventListener("click", () => {
//   newAvatar.open();
//   avatarFormValidator.resetValidation(popupAvatarSubmit);
// });
