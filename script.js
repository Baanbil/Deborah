const welBtn = document.getElementById("welBtn")
const message = document.getElementById("message");
const backBtn = document.getElementById("back");
const welcome = document.getElementById("welcome");
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const hint =document.getElementById("hint")


welBtn.onclick = function(){
  welcome.style.display = "none"
  message.style.display = "block"
  backBtn.style.display = "block"
  hint.style.display  = "none"
}

backBtn.onclick = function(){
  message.style.display = "none";
  welcome.style.display = "flex";
  hint.style.display  = "block"
  welcome.style.animation = "2s rotate forwards"
  backBtn.style.display = "none";
}

play.addEventListener("click", function(){
  audio.play();
})