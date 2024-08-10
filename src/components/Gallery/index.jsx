import React, { useEffect, useState } from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_gallery.scss";
import logements from "../../data_apparts/logements.json";

const Carousel = ({ logementId }) => {
  const [pictures, setPictures] = useState([]);
  const [indexActuel, setIndexActuel] = useState(0);

  useEffect(() => {
    const logement = logements.find((logement) => logement.id === logementId);
    if (logement) {
      setPictures(logement.pictures);
    }
  }, [logementId]);

  useEffect(() => {
    if (pictures.length > 0) {
      const elementImage = document.querySelector(".banner-img");
      elementImage.src = pictures[indexActuel];
    }
  }, [indexActuel, pictures]);

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

  return (
    <div id="carousel">
      <div className="banner">
        <img
          className="banner-img"
          src={pictures[indexActuel]}
          alt="carousel"
        />
        <div className="caption">{pictures[indexActuel]?.caption}</div>
      </div>
      <div className="alignement_arrow">
        <div className="arrow_left" onClick={handleLeftArrowClick}>
          {"<"}
        </div>
        <div className="arrow_right" onClick={handleRightArrowClick}>
          {">"}
        </div>
      </div>
      <div className="chiffre">
        {indexActuel + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Carousel;
