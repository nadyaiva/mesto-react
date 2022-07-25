import React from "react";
import Api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Api.getInitialCards().then((data) => {
      setCards(data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="container profile">
        <div className="profile__container-avatar">
          <img
            onClick={props.onEditAvatarClick}
            className="profile__avatar"
            alt="Фото профиля"
            src={currentUser.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__title">{currentUser.about}</p>
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
        <ul className="elements">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </>
  );
}
export default Main;
