const pinoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const KeysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clikedKey = document.querySelector(`[data-key="${key}"]`);
  clikedKey.classList.add("active");
  setTimeout(()=>{
    clikedKey.classList.remove("active");
  },150);
};

pinoKeys.forEach((key)=>{
  key.addEventListener("click",()=> playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) =>{

  if(mapedKeys.includes(e.key)){
    playTune(e.key);
  }  
});

const handleVolume = (e) =>{
  audio.volume = e.target.value;
}

const showHidekeys = () =>{
  pinoKeys.forEach(key => key.classList.toggle('hide'))
}

volumeSlider.addEventListener("input", handleVolume);

KeysCheck.addEventListener("click", showHidekeys);