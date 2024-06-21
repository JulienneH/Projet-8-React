import React from "react";
import header from "../assets/Header.png";
import "./Header.scss";
function Header() {
  return (
    <header>
      <div>
        <img src={header} alt="image_header" />
      </div>
    </header>
  );
}

export default Header;
