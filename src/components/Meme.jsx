import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  let [memeImage, setMemeImage] = useState("https://i.imgflip.com/1bij.jpg");

  function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];

    setMemeImage(randomMeme.url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top-text" className="form__input" />
        <input type="text" placeholder="Bottom-text" className="form__input" />
        <button className="form__button" onClick={getMemeImage}>
          Get me a new meme image
        </button>
      </div>
      <img src={memeImage} alt="meme image" className="meme__image" />
    </main>
  );
}

export default Meme;
