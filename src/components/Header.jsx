import React from "react";
import header from "../assets/Logo.png";
import "../styles/main.scss";
function Header() {
  return (
    <header>
      <div>
        <img className="header_logo" src={header} alt="logo_header" />
      </div>
      <ul className="header_menu">
        <li className="header_link">Accueil</li>
        <li>A propos</li>
      </ul>
    </header>
  );
}

export default Header;
