import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Caroussel({ pictures }) {
  //déclaration de la variable d'état currentPicture et d'une fonction pour mettre à jour cette variable
  const [currentPicture, setCurrentPicture] = useState(0);

  const nextPicture = () => {
    //prevIndex représente la valeur actuel de currentPicture au moment ou setCurrentPicture est appelée
    setCurrentPicture((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousPicture = () => {
    setCurrentPicture((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }
  if (pictures.length === 1) {
    return (
      <div className="caroussel">
        <img className="caroussel_img" src={pictures[0]} alt="" />
      </div>
    );
  }

  return (
    <div className="caroussel_container">
      <img className="caroussel_img" src={pictures[currentPicture]} alt="" />
      <div className="caroussel_counter">
        {currentPicture + 1} / {pictures.length}
      </div>
      <div className="caroussel_icon">
        <span className="caroussel_previous" onClick={previousPicture}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span className="caroussel_next" onClick={nextPicture}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
}

export default Caroussel;
