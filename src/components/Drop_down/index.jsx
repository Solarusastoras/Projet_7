import React, { useState } from "react";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";
import "../../utils/SASS/elements/_drop_down.scss";

const Depliant = ({ title, iconDown, iconUp, children }) => {
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
            src={isOpen ? iconDown : iconUp}
            alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
            style={{
              width: "16px",
              height: "16px",
              filter: "invert(100%)",
              marginRight: "25px",
              cursor: "pointer"
            }}
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