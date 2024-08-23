import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_tag.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

// Composant pour afficher un tag individuel
const Tag = ({ tag }) => <div className="tags">{tag}</div>;

// Composant principal pour afficher la liste des tags d'un logement
const TagList = () => {
  const [logement, setLogement] = useState(null);

  // Utiliser useEffect pour récupérer le logement sélectionné au chargement du composant
  useEffect(() => {
    const clickedId = localStorage.getItem("clickedId");
    const foundLogement = logements.find(
      (logement) => logement.id === clickedId
    );
    setLogement(foundLogement);
  }, []);

  // Retourner la liste des tags du logement
  return (
    <div className="tag_line">
      {logement.tags.map((tag, index) => (
        <Tag key={`${logement.id}-${index}`} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
