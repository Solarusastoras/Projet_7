import logo from "../../components/Header/logo_kasa.svg";
import "../../utils/CSS/style.css";


function Home() {
  



  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <div className="homeText">
        <h1> Chez vous, partout et ailleurs</h1>
        <p> Louez un logement pour une nuit ou bien plus longtemps</p>
      </div>
    </div>
  );
}

export default Home;
