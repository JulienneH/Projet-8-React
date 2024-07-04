import React from "react";
import header from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div>
        <img className="header_logo" src={header} alt="logo_header" />
      </div>
      <ul className="header_menu">
        <li
          className={`header_link ${location.pathname === "/home" ? "active" : ""}`}
        >
          <Link to="/home" className="header_link_style">
            Accueil
          </Link>
        </li>
        <li
          className={`header_link ${location.pathname === "/about" ? "active" : ""}`}
        >
          <Link to="/about" className="header_link_style">
            A propos
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
