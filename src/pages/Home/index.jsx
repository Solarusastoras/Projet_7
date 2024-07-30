import React from "react";
import "../../utils/SASS/pages/_home.scss";
import imageIndex from "../../utils/Images/bcktop1.png";
import Cards from "../../components/Cards";

function Home() {
  return (
    <div className="home_text">
      <img className="image_index"
        src={imageIndex}
        alt="Mer et cote rocheuse"
      />
      <h1 className="position_titre">Chez vous, partout et ailleurs</h1>
      <div className="card_ctn">
        <Cards />
        
      </div>
    </div>
  );
}

export default Home;
