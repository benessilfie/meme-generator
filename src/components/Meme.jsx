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

  // console.log(meme.topText, meme.bottomText);

  function handleChange() {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top-text"
          className="form__input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom-text"
          className="form__input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="form__button" onClick={getMemeImage}>
          Get me a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme image" className="meme__image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
