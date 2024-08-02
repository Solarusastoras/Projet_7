import React, { useEffect, useState } from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_gallery.scss";
import logements from "../../data_apparts/logements.json";

const Carousel = ({ logementId }) => {
  const [pictures, setPictures] = useState([]);
  const [indexActuel, setIndexActuel] = useState(0);

  useEffect(() => {
    // Trouver le logement par ID et charger ses images
    const logement = logements.find((logement) => logement.id === logementId);
    if (logement) {
      setPictures(logement.pictures);
    }
  }, [logementId]);

  useEffect(() => {
    if (pictures.length > 0) {
      mettreAJourCarousel();
    }
  }, [indexActuel, pictures]);

  function mettreAJourCarousel() {
    if (pictures.length === 0) return;

    // Image affichée
    let elementImage = document.querySelector(".banner-img");
    let urlImageActuelle = pictures[indexActuel];
    elementImage.src = urlImageActuelle;

    // Dots
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.remove("dot_selected");
      if (index === indexActuel) {
        dot.classList.add("dot_selected");
      }
    });
  }

  const handleLeftArrowClick = () => {
    setIndexActuel((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const handleRightArrowClick = () => {
    setIndexActuel((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleDotClick = (index) => {
    setIndexActuel(index);
  };

  return (
    <div id="carousel">
      <div className="arrow_left" onClick={handleLeftArrowClick}>
        {"<"}
      </div>
      <div className="banner">
        <img
          className="banner-img"
          src={pictures[indexActuel]?.url}
          alt="carousel"
        />
        <div className="caption">{pictures[indexActuel]?.caption}</div>
      </div>
      <div className="arrow_right" onClick={handleRightArrowClick}>
        {">"}
      </div>
      <div className="chiffre">
        {indexActuel + 1}/{pictures.length}
      </div>
      <div className="dots">
        {pictures.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === indexActuel ? "dot_selected" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;