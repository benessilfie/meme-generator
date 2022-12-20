import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];

    setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomMeme.url }));
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
      <img src={meme.randomImage} alt="meme image" className="meme__image" />
    </main>
  );
}

export default Meme;
