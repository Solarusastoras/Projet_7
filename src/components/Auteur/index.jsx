import React from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_Auteur.scss";

const Auteurs = ({ name, picture }) => (
  <div className="auteur-item">
    <p className="auteur">{name}</p>
    <img src={picture} alt={name} className="picture" />
  </div>
);

const Auteur = () => (
  <div className="auteur-container">
    {logements.map((logement) => (
      <Auteurs
        key={logement.id}
        name={logement.host.name}
        picture={logement.host.picture}
      />
    ))}
  </div>
);

export default Auteur;
