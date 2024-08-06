import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Stars.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import starSolid from "../../utils/Images/star-solid.svg";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="star_selection">
          <img src={starSolid} alt="Star" />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star">
          <img src={starSolid} alt="Star" />
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

const Stars = () => {
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find(
      (logement) => logement.id === clickedId
    );
    setLogement(foundLogement);
  }, []);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="rating - mobile_stars_auteur">
      <div key={logement.id} className="stars">
        <StarRating rating={logement.rating} />
      </div>
    </div>
  );
};

export default Stars;
