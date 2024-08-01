import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_cards.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const Card = ({ id, cover, title, setClickedId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setClickedId(id);
    navigate(`/apparts`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

function Cards() {
  const [clickedId, setClickedId] = useState(null);

  return (
    <div className="logements">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
          setClickedId={setClickedId}
        />
      ))}
      {clickedId && <p>ID cliqué: {clickedId}</p>}
    </div>
  );
}

export default Cards;
