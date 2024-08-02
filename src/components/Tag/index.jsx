import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_tag.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const Tag = ({ tag }) => <div className="tags">{tag}</div>;

const TagList = () => {
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
    <div className="tag_line">
      {logement.tags.map((tag, index) => (
        <Tag key={`${logement.id}-${index}`} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;