import React, { useState, useEffect } from "react";
import "../../utils/SASS/pages/_apparts.scss";
import Depliant from "../../components/Drop_down";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";
import Carousel from "../../components/Gallery";
import TitreLieux from "../../components/Titre_lieux";
import Auteur from "../../components/Auteur";
import Stars from "../../components/Stars";
import Tags from "../../components/Tag";
import LogementDetails from "../../components/Description";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const ToggleSectionbis = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglebis = () => setIsOpen(!isOpen);

  // Ajoutez cette condition pour cacher le composant si le titre est "Équipements"
  if (title === "Équipements") {
    return null;
  }

  return (
    <div>
      <Depliant
        title={title}
        isOpen={isOpen}
        toggle={togglebis}
        iconDown={iconDown}
        iconUp={iconUp}
      >
        {children}
      </Depliant>
    </div>
  );
};

function Apparts() {
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
    <>
      <div className="gallery">
        <Carousel logementId={logement.id} />
      </div>

      <div className="alignement_titre_auteur">
        <TitreLieux logementId={logement.id} />
        <Auteur logementId={logement.id} />
      </div>

      <div className="ligne_tag_stars">
        <Tags className="tag" logementId={logement.id} />
        <Stars className="stars" logementId={logement.id} />
      </div>

      <div>
        <LogementDetails logementId={logement.id} />
        <ToggleSectionbis title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </ToggleSectionbis>
      </div>
    </>
  );
}
export default Apparts;
