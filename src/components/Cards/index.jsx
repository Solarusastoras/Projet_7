import React from "react";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_cards.scss";

const Card = ({ cover, title }) => (
  <div className="card">
    <img src={cover} alt={title} className="card-cover" />
    <h2 className="card-title">{title}</h2>
  </div>
);

function Cards() {
  return (
    <div className="logements">
      {logements.map((logement) => (
        <Card key={logement.id} cover={logement.cover} title={logement.title} />
      ))}
    </div>
  );
}

export default Cards;
