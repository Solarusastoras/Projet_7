import React, { useState, useEffect } from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const TitreLieux = ({ title, location }) => (
  <div>
    <h1 className="title_apparts">{title}</h1>
    <p className="localisation">{location}</p>
  </div>
);

const TitreLieuxContainer = () => {
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
    <div>
      <TitreLieux title={logement.title} location={logement.location} />
    </div>
  );
};

export default TitreLieuxContainer;
