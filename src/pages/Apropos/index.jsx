import React, { useState } from "react";
import "../../utils/SASS/pages/_apropos.scss";
import Depliant from "../../components/Drop_down";
import imageIndex from "../../utils/Images/bcktop2.png";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="taille_depliant_apropos">
      <Depliant
        title={title}
        isOpen={isOpen}
        toggle={toggle}
        iconDown={iconDown}
        iconUp={iconUp}
      >
        {children}
      </Depliant>
    </div>
  );
};

function Apropos() {
  return (
    <div className="apropos">
      <img
        className="image_apropos"
        src={imageIndex}
        alt="une coligne avec vu sur les montagnes"
      />
      <ToggleSection title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </ToggleSection>
      <ToggleSection title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </ToggleSection>
      <ToggleSection title="Service">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </ToggleSection>
      <ToggleSection title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </ToggleSection>
    </div>
  );
}

export default Apropos;
