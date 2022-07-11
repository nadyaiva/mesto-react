import React from "react";

function Main(props) {
  return (
    <>
      <section className="container profile">
        <div className="profile__container-avatar">
          <img
            onClick={props.onEditAvatarClick}
            className="profile__avatar"
            src="<%=require('../images/profile__avatar.jpg')%>"
            alt="Фото профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__title">Исследователь океана</p>
          <button
            onClick={props.onEditProfileClick}
            type="button"
            className="profile__button profile__button_type_edit"
          ></button>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="profile__button profile__button_type_add"
        ></button>
      </section>
      <section className="container">
        <ul className="elements"></ul>
      </section>
    </>
  );
}
export default Main;

// {/* 
// {/* POPUP ADD NEW PHOTO */}
// <div className="popup popup_place_add-photo">
// <form noValidate className="form form_add-photo" name="popup-add-photo">
//   <h2 className="popup__heading">Новое место</h2>
//   <fieldset className="popup__input-container">
//     <label className="popup__label">
//       <input
//         className="popup__input popup__input_type_title"
//         value=""
//         placeholder="Название"
//         type="text"
//         name="cardname"
//         id="title-input"
//         minLength="2"
//         maxLength="30"
//         required
//       />
//       <span className="popup__input-error title-input-error"></span>
//     </label>
//     <label className="popup__label">
//       <input
//         className="popup__input popup__input_type_pic-link"
//         placeholder="Ссылка на картинку"
//         value=""
//         type="url"
//         name="link"
//         id="link-input"
//         required
//       />
//       <span className="popup__input-error link-input-error">
//         Введите адрес сайта.
//       </span>
//     </label>
//     <button
//       className="popup__save-button popup__save-button_place_add-photo"
//       type="submit"
//     >
//       Создать
//     </button>
//   </fieldset>
//   <button
//     className="popup__close popup__close-button popup__close-button_place_form-photo"
//     type="button"
//   ></button>
// </form>
// </div>

// {/* POPUP CHANGE AVATAR */}
// <div className="popup popup_place_avatar">
// <form noValidate className="form form_avatar" name="avatar">
//   <h2 className="popup__heading">Обновить аватар</h2>
//   <fieldset className="popup__input-container">
//     <label className="popup__label">
//       <input
//         className="popup__input popup__input_type_pic-link"
//         placeholder="Ссылка на аватар"
//         value=""
//         type="url"
//         name="link"
//         id="link-avatar"
//         required
//       />
//       <span className="popup__input-error link-input-error">
//         Введите адрес сайта.
//       </span>
//     </label>
//     <button
//       className="popup__save-button popup__save-button_place_avatar"
//       type="submit"
//     >
//       Сохранить
//     </button>
//   </fieldset>
//   <button
//     className="popup__close popup__close-button popup__close-button_place_avatar"
//     type="button"
//   ></button>
// </form>
// </div>
// <div className="popup popup_place_confirm">
// <form noValidate className="form form_confirm" name="popup-confirm">
//   <h2 className="popup__heading popup__heading_confirm">Вы уверены?</h2>
//   <fieldset className="popup__input-container">
//     <button
//       className="popup__save-button popup__save-button_place_confirm"
//       type="submit"
//     >
//       Да
//     </button>
//   </fieldset>
//   <button
//     className="popup__close popup__close-button popup__close-button_place_confirm"
//     type="button"
//   ></button>
// </form>
// </div>
