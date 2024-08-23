import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Auteur.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

// Composant pour afficher les informations de l'auteur
const Auteurs = ({ name, picture, nameClass, pictureClass }) => (
  <div className="auteur-item">
    <p className={nameClass}>{name}</p>
    <img src={picture} alt={name} className={pictureClass} />
  </div>
);

// Composant principal pour afficher l'auteur du logement
const Auteur = () => {
  const [logement, setLogement] = useState(null);

  // Utiliser useEffect pour récupérer l'id du logement sélectionné au chargement du composant
  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find(
      (logement) => logement.id === clickedId
    );
    setLogement(foundLogement);
  }, []);

  // Retourner le composant d'auteur avec les informations du logement
  return (
    <div className="auteur-container">
      <Auteurs
        name={logement.host.name}
        nameClass="auteur-name-class"
        picture={logement.host.picture}
        pictureClass="auteur-picture-class"
      />
    </div>
  );
};

export default Auteur;
