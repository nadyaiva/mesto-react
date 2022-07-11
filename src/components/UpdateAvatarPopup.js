import React from "react";
import PopupWithForm from "./PopupWithForm";

function UpdateAvatarPopup(props) {
    return (
  <PopupWithForm
    title="Обновить аватар"
    name="avatar"
    isOpen={props.isOpen}
    button="Сохранить"
  >
    <label className="popup__label">
      <input
        className="popup__input popup__input_type_pic-link"
        placeholder="Ссылка на аватар"
        value=""
        type="url"
        name="link"
        id="link-avatar"
        required
      />
      <span className="popup__input-error link-input-error">
        Введите адрес сайта.
      </span>
    </label>
  </PopupWithForm>
    );
};


export default UpdateAvatarPopup;
