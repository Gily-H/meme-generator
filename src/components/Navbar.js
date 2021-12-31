import React from "react";
import logo from "../images/this-is-fine-dog.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="meme logo" />
      <h2 className="meme-title">Meme Generator</h2>
      <p>Gilman Huang</p>
    </nav>
  );
}
