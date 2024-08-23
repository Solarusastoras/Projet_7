import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import Depliant from "../../components/Drop_down";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_description.scss";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";

// Composant pour afficher les détails d'un logement
const LogementDetails = () => {
  const [logement, setLogement] = useState(null);

  // Utiliser useEffect pour récupérer le logement sélectionné au chargement du composant
  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find(
      (logement) => logement.id === clickedId
    );
    setLogement(foundLogement);
  }, []);

  //La condition suivante vérifie si l'objet logement ou la propriété host de logement est null
  if (!logement || !logement.host) {
    return <div>Chargement...</div>;
  }

  // Retourner les détails du logement avec les composants Depliant pour la description et les équipements
  return (
    <div className="ligne_apparts">
      <div className="barre_appart">
        <Depliant title="Description" iconDown={iconDown} iconUp={iconUp}>
          <p className="text_description">{logement.description}</p>
        </Depliant>
      </div>
      <div className="barre_appart - marge_description">
        <Depliant title="Équipements" iconDown={iconDown} iconUp={iconUp}>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Depliant>
      </div>
    </div>
  );
};

export default LogementDetails;
