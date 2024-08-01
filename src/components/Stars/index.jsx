import React from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Stars.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="star_selection">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star">
          ★
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

const Stars = () => {
  return (
    <div className="rating">
      {logements.map((logement) => (
        <div key={logement.id} className="stars">
          <StarRating rating={logement.rating} />
        </div>
      ))}
    </div>
  );
};

export default Stars;
