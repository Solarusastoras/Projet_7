import React from "react";
import logoHeader from "../../utils/Images/logoHeader.png";
import "../../utils/SASS/layouts/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="entet">
      <img className="image_header" src={logoHeader} alt="Logo de Kasa" />

      <nav className="nav_header">
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
