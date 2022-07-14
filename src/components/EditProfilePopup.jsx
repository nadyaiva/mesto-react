import PopupWithForm from "./ImagePopup";
import React from "react";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      button="Сохранить"
      onClose={onClose}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          value="Жак-Ив Кусто"
          placeholder="Имя"
          type="text"
          name="fullname"
          id="name-input"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_job"
          placeholder="Вид деятельности"
          value="Исследователь океана"
          type="text"
          name="jobtitle"
          id="job-input"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
