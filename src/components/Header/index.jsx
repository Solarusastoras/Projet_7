import React from "react";
import logoHeader from '../../utils/Images/logoHeader.png'
import "../../utils/SASS/index.scss";

function Header() {
  return (
    <div className="entet">
      <div className="logoHeader">
        <img src={logoHeader} alt="Logo de Kasa" />
      </div>
      <nav>
        <p>Accueil</p>
        <p>A Propos</p>
      </nav>
    </div>
  );
}

export default Header;
