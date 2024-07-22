import React from "react";
import logoHeader from '../../utils/Images/logoHeader.png'
import "../../utils/CSS/style.css";

function Header() {
  return (
    <div className="entet">
      <div className="logoHeader">
        <img src={logoHeader} alt="Logo de Kasa" />
      </div>
      <nav>
        <p>Accueil</p>
        <link to="/Apropos">A Propos</link>
      </nav>
    </div>
  );
}

export default Header;
