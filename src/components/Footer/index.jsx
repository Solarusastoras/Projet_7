import React from "react";
import "../../utils/CSS/style.css";
import logoFooter from "../../utils/Images/logoFooter.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="Logo Footer" />
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
  );
}

export default Footer;
