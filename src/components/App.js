import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import AddPostPopup from "./AddPostPopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

  function onEditProfile() {
    setisEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setisAddPlacePopupOpen(true);
  }

  function onEditAvatar() {
    setisEditAvatarPopupOpen(true);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={onEditProfile}
        onAddPlaceClick={onAddPlace}
        onEditAvatarClick={onEditAvatar}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} />
      <AddPostPopup isOpen={isAddPlacePopupOpen} />
      <UpdateAvatarPopup isOpen={isEditAvatarPopupOpen} />
    </div>
  );
}

export default App;