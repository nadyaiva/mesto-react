import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPostPopup from "./AddPostPopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";
import PopupWithImage from "./PopupWithImage";
import api from "../utils/Api";

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

  function closeAllPopups() {
    setisEditProfilePopupOpen(false)
    setisAddPlacePopupOpen(false)
    setisEditAvatarPopupOpen(false)
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <AddPostPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <UpdateAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <PopupWithImage />
    </div>
  );
}

export default App;