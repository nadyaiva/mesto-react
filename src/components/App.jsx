import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPostPopup from "./AddPostPopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";
import ImagePopup from "./ImagePopup";
import Api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({})

  React.useEffect(() => {
    Api.getUserInfoApi().then((data) => {
      setCurrentUser(data)
      console.log('effect call')
    }).catch((err) => console.log(err))
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
