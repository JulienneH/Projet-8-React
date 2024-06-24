import React from "react";
import footer from "../assets/Footer.png";
import "../styles/main.scss";
function Footer() {
  return (
    <footer>
      <div>
        <img className="footer" src={footer} alt="image_footer" />
      </div>
    </footer>
  );
}

export default Footer;
