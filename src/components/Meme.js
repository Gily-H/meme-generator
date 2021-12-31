import React, { useState } from "react";
import memesData from "../memesData";
import "../styles/meme.css";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/5zmu9c.jpg");

  function getMemeOnClick() {
    const memesList = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesList.length);
    setMemeImage(memesList[randomIndex].url);
  }

  return (
    <div className="meme-container">
      <input type="text" placeholder="Top Text" />
      <input type="text" placeholder="Bottom Text" />
      <button className="meme-button" onClick={getMemeOnClick}>
        Generate New Meme
      </button>
      <img className="meme-img" src={memeImage} alt="meme" />
    </div>
  );
}
