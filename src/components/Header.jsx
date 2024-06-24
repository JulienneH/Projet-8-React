import React from "react";
import header from "../assets/Logo.png";
import "../styles/main.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>
        <img className="header_logo" src={header} alt="logo_header" />
      </div>
      <ul className="header_menu">
        <li className="header_link">
          <Link to="/home">Accueil</Link>
        </li>
        <li className="header_link">
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
