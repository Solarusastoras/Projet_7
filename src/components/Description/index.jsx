import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import Depliant from "../../components/Drop_down"; // Chemin mis à jour
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_description.scss"
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";

const LogementDetails = () => {
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find((logement) => logement.id === clickedId);
    setLogement(foundLogement);
  }, []);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="alignement">
      <Depliant className="barre_appart"  title="Description" iconDown={iconDown} iconUp={iconUp}>
        <p>{logement.description}</p>
      </Depliant>
      <Depliant  title="Équipements" iconDown={iconDown} iconUp={iconUp}>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Depliant>
    </div>
  );
};

export default LogementDetails;