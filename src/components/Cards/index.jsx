import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_cards.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const Card = ({ id, cover, title, setClickedId, updateAccueilLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Mise à jour de l'état `clickedId` dans le composant `Cards`
    setClickedId(id);
    localStorage.setItem("clickedId", id);
    updateAccueilLink();
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
  const location = useLocation();

 const updateAccueilLink = () => {
  const accueilLink = document.querySelector("#accueil");
  if (accueilLink) {
    if (location.pathname === "/" || location.pathname === "/apparts") {
      accueilLink.style.textDecoration = "none";
    } else {
      accueilLink.style.textDecoration = "underline"; // ou "" pour enlever le style
    }
  }
};

  useEffect(() => {
    updateAccueilLink();
  }, [location.pathname]);
  

  return (
    <div className="logements">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          cover={logement.cover}
          title={logement.title}
          setClickedId={setClickedId}
          updateAccueilLink={updateAccueilLink}
        />
      ))}
      {clickedId && <p>ID cliqué: {clickedId}</p>}
    </div>
  );
}

export default Cards;
