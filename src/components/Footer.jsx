import React from "react";
import FooterLogo from "../assets/logoFooter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img className="footer_img" src={FooterLogo} alt="logo" />
        <div className="footer_text">
          <h3>
            <FontAwesomeIcon className="footer_icon" icon={faCopyright} />
            2020 Kasa.All rights reserved
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
