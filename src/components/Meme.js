import React, { useState, useEffect } from "react";
import "../styles/meme.css";

export default function Meme() {
  const [memeData, setMemeData] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/5zmu9c.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes));
  }, []);

  console.log(memeData);

  function getMemeOnClick() {
    const randomIndex = Math.floor(Math.random() * memeData.length);
    const imageUrl = memeData[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: imageUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-container">
      <input
        className="top-text-input"
        type="text"
        placeholder="Top Text"
        onChange={handleChange}
        name="topText"
        value={meme.topText}
      />
      <input
        className="bottom-text-input"
        type="text"
        placeholder="Bottom Text"
        onChange={handleChange}
        name="bottomText"
        value={meme.bottomText}
      />
      <button className="meme-button" onClick={getMemeOnClick}>
        Generate New Meme
      </button>
      <div className="meme">
        <img className="meme-img" src={meme.url} alt="meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
