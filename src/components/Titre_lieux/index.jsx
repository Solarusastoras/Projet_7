import React from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const TitreLieux = ({ title, location, id }) => (
  <div>
    <h1 className="title_apparts">{title}</h1>
    <p className="logements">{location}</p>
  </div>
);

const TitreLieuxContainer = () => {
  return (
    <div>
      {logements.map((logement) => (
        <TitreLieux
          key={logement.id}
          title={logement.title}
          location={logement.location}
          id={logement.id}
        />
      ))}
    </div>
  );
};

export default TitreLieuxContainer;
