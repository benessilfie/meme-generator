import React from "react";
import trollFace from "../assets/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="Troll Face" className="header__image" />
      <p className="header__title">Meme Generator</p>
      <p className="header__project">React Course - Project 3</p>
    </header>
  );
}

export default Header;
