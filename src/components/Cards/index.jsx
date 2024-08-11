import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logements from "../../data_apparts/logements.json";
import "../../utils/SASS/elements/_cards.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

const Card = ({ id, cover, title, setClickedId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setClickedId(id);
    localStorage.setItem("clickedId", id);
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

  useEffect(() => {
    const handleCardClick = () => {
      const cardSelect = document.querySelector('a[href="/"]');
      if (cardSelect) {
        cardSelect.classList.remove("active");
      }
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, []);

  useEffect(() => {
    const accueilLink = document.querySelector('nav a[href="/"]');
    if (accueilLink) {
      accueilLink.classList.remove("active");
    }
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
        />
      ))}
      {clickedId && <p>ID cliqué: {clickedId}</p>}
    </div>
  );
}

export default Cards;
