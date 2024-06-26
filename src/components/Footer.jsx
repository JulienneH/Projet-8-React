import React from "react";
import Footer from "../assets/logoFooter.png";
import "../styles/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function FooterComponent() {
  return (
    <footer>
      <div className="footer">
        <img className="footer_img" src={Footer} alt="logo" />
        <FontAwesomeIcon className="footer_icon" icon={faCopyright} />
        <h3 className="footer_text">2020 Kasa.All rights reserved</h3>
      </div>
    </footer>
  );
}

export default FooterComponent;
