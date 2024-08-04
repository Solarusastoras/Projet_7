import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Auteur.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const Auteurs = ({ name, picture }) => (
  <div className="auteur-item">
    <p className="auteur">{name}</p>
    <img src={picture} alt={name} className="picture" />
  </div>
);

const Auteur = () => {
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
    <div className="auteur-container">
      <Auteurs name={logement.host.name} picture={logement.host.picture} />
    </div>
  );
};

export default Auteur;
