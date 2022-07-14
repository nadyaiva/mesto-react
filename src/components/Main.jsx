import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [cards, setcards] = React.useState([""]);

  const [userName, setuserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfoApi().then((data) => {
      setuserName(data.name);
      setuserDescription(data.about);
      setuserAvatar(data.avatar);
    });
  }, [userName, userDescription, userAvatar]);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      console.log(data);
      setcards(data);
    });
  }, []);

  return (
    <>
      <section className="container profile">
        <div className="profile__container-avatar">
          <img
            onClick={props.onEditAvatarClick}
            className="profile__avatar"
            alt="Фото профиля"
            src={userAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__title">{userDescription}</p>
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
      <section className="container">
        <ul className="elements">
          {cards.map((card) => (
            <Card card={card}/>
          ))}
        </ul>
      </section>
    </>
  );
}
export default Main;
