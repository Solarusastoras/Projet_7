import React from "react";
import "../../utils/SASS/pages/_home.scss";
import imageIndex from "../../utils/Images/bcktop1.png";
import Cards from "../../components/Cards";

function Home() {
  return (
    <div className="home_text">
      <img
        src={imageIndex}
        alt="Mer et cote rocheuse"
        style={{
          width: "1240px",
          height: "223px",
          marginTop: "50px",
          marginLeft: "100px",
          borderRadius: "25px 25px 25px 25px",
          objectFit: "cover",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          filter: "brightness(40%)",
          marginBottom: "50px",
        }}
      />
      <h1 className="position_titre">Chez vous, partout et ailleurs</h1>
      <div className="card_ctn">
        <Cards />
        
      </div>
    </div>
  );
}

export default Home;
