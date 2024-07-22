import { Link } from "react-router-dom";
import logoHeader from "./logo_kasa.svg";

function Header() {
  return (
    <div className="entet">
        <div className="logoHeader">
        <Link to="/">
          <img  src={logoHeader} alt="Logo de Kasa" />
        </Link>
        </div>
      <div>
      <p>Accueil</p>
      <p>A Propos</p>
      </div>
    </div>
  );
}

export default Header;