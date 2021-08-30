const switchSoundBtn = document.querySelector(".key-switch");
const audios = document.querySelectorAll("audio");
const keys = document.querySelectorAll(".key");
let audio = audios[0];
const switchSelect = document.querySelector(".switch-select");
const footerSounds = document.querySelectorAll(".key-switch");
const colorSelect = document.querySelector(".color-select");
const defaultColor = document.querySelector(".default-color");
//Events
window.addEventListener("keydown", playSound);
switchSelect.addEventListener("click", filterSound);
// colorSelect.addEventListener('click', colorChange)

//Play the audio and add the color
function playSound(e) {
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  key.classList.add("playing");
}

//End the transition
keys.forEach(function (key) {
  key.addEventListener("transitionend", function () {
    key.classList.remove("playing");
  });
});

//Change the sound based on selection
function filterSound(e) {
  const sounds = switchSelect.childNodes;
  sounds.forEach(function () {
    switch (e.target.value) {
      case "bluesound":
        audio = audios[0];
        break;
      case "greensound":
        audio = audios[1];
        break;
      case "redsound":
        audio = audios[2];
        break;
      case "whitesound":
        audio = audios[3];
        break;
      case "snappykeyboard":
        audio = audios[4];
        break;
      case "bubblespop":
        audio = audios[5];
        break;
        case "keyboardsound":
        audio = audios[6];
    }
  });
}

// // //Color Change
// function colorChange(e){
//   const colors = colorSelect.childNodes;
//   colors.forEach(function(){
//     if(e.target.value === "default-color"){
//       return
//     }else if(e.target.value === "random-color"){
//       const key = document.querySelectorAll('.key')
//       console.log(key.style)
//     }
//   })
// }
