import React from "react";
import "../../utils/SASS/layouts/_footer.scss";
import logoFooter from "../../utils/Images/logoFooter.png";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Footer() {
  return (
    <div className="background_b">
      <div className="footer">
        <img className="image_footer" src={logoFooter} alt="Logo Footer" />

        <p className="decallage_g">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
