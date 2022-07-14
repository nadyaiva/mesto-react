import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPostPopup from "./AddPostPopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState(null);

  function handleCardClick(card) {
    setselectedCard(card);
  }

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
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard(false);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={onEditProfile}
        onAddPlaceClick={onAddPlace}
        onEditAvatarClick={onEditAvatar}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPostPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <UpdateAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
