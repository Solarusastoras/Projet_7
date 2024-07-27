import React from "react";

const Depliant = ({ title, isOpen, toggle, iconDown, iconUp, children }) => {
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

export default Depliant;