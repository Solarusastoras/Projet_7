import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Stars.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import starSolid from "../../utils/Images/star-solid.svg";

// Composant pour afficher les étoiles en fonction de la note
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  // Boucle pour créer les éléments d'étoiles
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      // Si l'index est inférieur ou égal à la note, ajouter une étoile pleine
      stars.push(
        <span key={i} className="star_selection">
          <img src={starSolid} alt="Star" />
        </span>
      );
    } else {
      // Sinon, ajouter une étoile vide
      stars.push(
        <span key={i} className="star">
          <img src={starSolid} alt="Star" />
        </span>
      );
    }
  }

  // Retourner un div contenant les étoiles
  return <div className="star-rating">{stars}</div>;
};

// Composant principal pour afficher les étoiles d'un logement
const Stars = () => {
  const [logement, setLogement] = useState(null);

  // Utiliser useEffect pour récupérer le logement sélectionné au chargement du composant
  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find(
      (logement) => logement.id === clickedId
    );
    setLogement(foundLogement);
  }, []);

  // Si le logement n'est pas encore chargé, afficher un message de chargement
  if (!logement) {
    return <div>Chargement...</div>;
  }

  // Retourner le composant d'étoiles avec la note du logement
  return (
    <div className="rating - mobile_stars_auteur">
      <div key={logement.id} className="stars">
        <StarRating rating={logement.rating} />
      </div>
    </div>
  );
};

export default Stars;
