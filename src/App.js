import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import "./styles/app.css";

export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Meme />
    </div>
  );
}
