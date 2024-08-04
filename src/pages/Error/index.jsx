import "../../utils/SASS/pages/_error.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Error() {
  useEffect(() => {
    document.title = "Oups...";
  });
  return (
    <div className="centre_error">
      <h1 className="h1_error">404</h1>
      <p className="text_Error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="accueil_error">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
