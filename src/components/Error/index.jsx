import "../../utils/CSS/style.css";
import { useEffect } from 'react'

function Error() {
    useEffect(() => {
        document.title = "Oups..."
    })
  return (
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <p>Retourner sur la page d'accueil</p>
      </div>
  );
}

export default Error;