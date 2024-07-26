import React from "react";
import "../../utils/SASS/layouts/_footer.scss";
import logoFooter from "../../utils/Images/logoFooter.png";

function Footer() {
  return (
    <div className="background_b">
    <div className="footer">
      <img src={logoFooter} alt="Logo Footer"style={{ width: '122px' }}/>

      <p className="decallage_g">© 2020 Kasa. All rights reserved</p>
      </div>
      </div>
  );
}

export default Footer;
