import React from "react";

function PopupWithImage () {
    return(
        <div className="popup popup-fullscreen">
        <figure className="popup-fullscreen__figure">
          <img
            className="popup-fullscreen__image"
            src="./images/elements__dombai.jpg"
            alt="Dombai"
          />
          <figcaption className="popup-fullscreen__caption">Архыз</figcaption>
          <button
            className="popup__close popup__close-button popup__close-button_place_fullscreen"
            type="button"
          ></button>
        </figure>
      </div>
    );
}
export default PopupWithImage;