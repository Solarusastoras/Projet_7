import React, { useState } from "react";
import "../../utils/SASS/pages/_apparts.scss";
import Depliant from "../../components/Drop_down";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";
import TitreLieux from "../../components/Titre_lieux";
import Auteur from "../../components/Auteur";
import Stars from "../../components/Stars";
import Tags from "../../components/Tag";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const ToggleSectionbis = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglebis = () => setIsOpen(!isOpen);

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
const logement = logements[0];
function Apparts() {
  return (
    <div className="apropos">
      <div className="gallery"></div>

      <div>
        <TitreLieux />
        <Auteur />
        <Tags />
        <Stars />
      </div>

      <div>
        <div className="tag"></div>

        <div className="stars"></div>
      </div>
      <div>
        <ToggleSectionbis title="Description">
          <p>{logement.description}</p>
        </ToggleSectionbis>
        <ToggleSectionbis title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </ToggleSectionbis>
      </div>
    </div>
  );
}

export default Apparts;
