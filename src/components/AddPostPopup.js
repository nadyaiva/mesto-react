import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPostPopup(props) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add-photo"
      isOpen={props.isOpen}
      button="Создать"
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_title"
          value=""
          placeholder="Название"
          type="text"
          name="cardname"
          id="title-input"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_pic-link"
          placeholder="Ссылка на картинку"
          value=""
          type="url"
          name="link"
          id="link-input"
          required
        />
        <span className="popup__input-error link-input-error">
          Введите адрес сайта.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPostPopup;
