import React, { useState } from "react";
import logoHeader from "../../utils/Images/LOGO Kasa.svg";
import "../../utils/SASS/layouts/_header.scss";
import { Link } from "react-router-dom";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="entet">
      <img className="image_header" src={logoHeader} alt="Logo de Kasa" />

      <nav className="nav_header">
      <Link
          to="/"
          className={`accueil ${activeLink === "accueil" ? "active" : ""}`}
          id="accueil"
          onClick={() => setActiveLink("accueil")}
        >
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={`apropos ${activeLink === "apropos" ? "active" : ""}`}
          id="apropos"
          onClick={() => setActiveLink("apropos")}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
