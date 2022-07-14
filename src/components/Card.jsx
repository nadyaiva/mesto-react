import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="elements__element">
      <button className="elements__button_trash" type="button"></button>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="elements__info">
        <p className="elements__caption">{card.name}</p>
        <div className="elements__like-info">
          <button className="elements__button_like" type="button"></button>
          <div className="elements__info_like-count">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
