import React, { useEffect, useState } from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_gallery.scss";
import logements from "../../data_apparts/logements.json";
import VectorLeftMax from "../../utils/Images/VectorLeftMax.svg";
import VectorRightMax from "../../utils/Images/VectorRightMax.svg";

const Carousel = ({ logementId }) => {
  const [pictures, setPictures] = useState([]);
  const [indexActuel, setIndexActuel] = useState(0);

  // useEffect pour charger les images du logement lorsque le composant est monté ou lorsque logementId change
  useEffect(() => {
    // Trouver le logement correspondant à l'ID fourni
    const logement = logements.find((logement) => logement.id === logementId);
    if (logement) {
      setPictures(logement.pictures);
    }
  }, [logementId]);

  // useEffect pour mettre à jour l'image affichée lorsque l'index ou les images changent
  useEffect(() => {
    if (pictures.length > 0) {
      const elementImage = document.querySelector(".banner-img");
      elementImage.src = pictures[indexActuel];
    }
  }, [indexActuel, pictures]);

  // Fonction pour gérer le clic sur la flèche gauche
  const handleLeftArrowClick = () => {
    // Diminue la valeur l'index actuel ou revenir à la dernière image si on est à la première
    setIndexActuel((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  // Fonction pour gérer le clic sur la flèche droite
  const handleRightArrowClick = () => {
    // Augmente la valeur l'index actuel ou revenir à la première image si on est à la dernière
    setIndexActuel((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div id="carousel">
      <div className="arrow">
        <div className="arrow_left" onClick={handleLeftArrowClick}>
          <img src={VectorLeftMax} alt="Left Arrow" />
        </div>
        <div className="arrow_right" onClick={handleRightArrowClick}>
          <img src={VectorRightMax} alt="Right Arrow" />
        </div>
      </div>

      <img className="banner-img" src={pictures[indexActuel]} alt="carousel" />

      <div className="chiffre">
        {indexActuel + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Carousel;
