import React, { useState } from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_drop_down.scss";
import iconUp from "../../utils/Images/chevron-up-solid.svg";
import iconDown from "../../utils/Images/chevron-down-solid.svg";

const Depliant = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <div>
      <h3 className={`depliantApropos ${clicked ? "" : "titreNonClique"}`}>
        {title}{" "}
        <span>
          <img
            className="fleche_up"
            src={isOpen ? iconDown : iconUp}
            alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
            onClick={toggle}
          />
        </span>
      </h3>
      <div className={`texteApropos ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
};

export default Depliant;
