import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import logoHeader from "../../utils/Images/LOGO Kasa.svg";
import "../../utils/SASS/layouts/_header.scss";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Header() {
  const location = useLocation();

  return (
    <header className="entet">
      <img className="image_header" src={logoHeader} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive || location.pathname === "/" ? "active" : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
