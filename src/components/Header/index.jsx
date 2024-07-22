import { Link } from "react-router-dom";
import logoHeader from "./logo_kasa.svg";
import "../../utils/CSS/style.css";


function Header() {
  return (
    <div className="entet">
        <div className="logoHeader">
        <Link to="/">
          <img  src={logoHeader} alt="Logo de Kasa" />
        </Link>
        </div>
      <nav>
      <p>Accueil</p>
      <link to="/Apropos">A Propos</link>
      </nav>
    </div>
  );
}

export default Header;