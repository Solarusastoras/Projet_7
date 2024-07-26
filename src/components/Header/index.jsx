import React from "react";
import logoHeader from "../../utils/Images/logoHeader.png";
import "../../utils/SASS/layouts/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="entet">
      <img
        src={logoHeader}
        alt="Logo de Kasa"
        style={{ width: "210px", height: "68px", marginTop: "49px" }}
      />

      <nav className="nav_header">
      <Link to="/" className="accueil">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
