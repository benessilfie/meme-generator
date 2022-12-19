import memesData from "../memesData";

function Meme() {
  function getMeme() {
    const memesArr = memesData.data.memes;
    const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];
    console.log(randomMeme.url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top-text" className="form__input" />
        <input type="text" placeholder="Bottom-text" className="form__input" />
        <button className="form__button" onClick={getMeme}>
          Get me a new meme image
        </button>
      </div>
    </main>
  );
}

export default Meme;
