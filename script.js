const enterBtn = document.getElementById("enter-btn");
const intro = document.getElementById("intro");
const mainPage = document.getElementById("main-page");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  music.play();
  intro.classList.add("hidden");
  mainPage.classList.remove("hidden");
});

const trails = [];
const maxTrail = 10;

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
  trails.push(trail);

  if(trails.length > maxTrail){
    const old = trails.shift();
    old.remove();
  }
});
