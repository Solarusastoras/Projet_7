import React, { useState } from "react";
import "../../utils/SASS/pages/_apropos.scss";
import imageIndex from "../../utils/Images/bcktop2.png";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <h3
        className="depliantApropos"
        onClick={toggle}
        style={{ cursor: "pointer" }}
      >
        {title}{" "}
        <span>
          <img
            src={isOpen ? iconDown : iconUp}
            alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
            style={{
              width: "16px",
              height: "16px",
              filter: "invert(100%)",
              marginRight: "25px",
            }}
          />
        </span>
      </h3>
      {isOpen && <p className="texteApropos">{children}</p>}
    </div>
  );
};
function Apropos() {
  return (
    <div className="apropos">
      <img
        src={imageIndex}
        alt="une coligne avec vu sur les montagnes"
        style={{
          width: "1240px",
          height: "223px",
          marginTop: "50px",
          marginLeft: "100px",
          borderRadius: "25px 25px 25px 25px",
          objectFit: "cover",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          filter: "brightness(70%)",
          marginBottom: "50px",
        }}
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
