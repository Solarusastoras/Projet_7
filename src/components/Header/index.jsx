import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logoHeader from "../../utils/Images/LOGO Kasa.svg";
import "../../utils/SASS/layouts/_header.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Met à jour l'état activeLink en fonction du chemin actuel
    if (location.pathname === "/") {
      setActiveLink("accueil");
    } else if (location.pathname === "/apropos") {
      setActiveLink("apropos");
    }
  }, [location.pathname]);

  return (
    <div className="entet">
      <img className="image_header" src={logoHeader} alt="Logo de Kasa" />

      <nav className="nav_header">
        <Link
          to="/"
          className={`text-link ${activeLink === "accueil" ? "active" : ""}`}
          onClick={() => setActiveLink("accueil")}
        >
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={`text-link ${activeLink === "apropos" ? "active" : ""}`}
          onClick={() => setActiveLink("apropos")}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;