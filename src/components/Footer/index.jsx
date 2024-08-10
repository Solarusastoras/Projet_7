import React from "react";
import "../../utils/SASS/layouts/_footer.scss";
import logoFooter from "../../utils/Images/LOGO Kasa.svg";
import "../../utils/SASS/base/_colors.scss";
import "../../utils/SASS/base/_fonts.scss";

function Footer() {
  return (
    <footer>
      <div className="footer_contenu">
        <img src={logoFooter} alt="Logo Footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
