const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

const overlayModeBtn = document.querySelector("#one");
const visableModeBtn = document.querySelector("#two");

const chatBtn = document.querySelector(".chat-icon");
const chatBox = document.querySelector(".allChat-box");

overlayModeBtn.addEventListener("click", (e) => {
  document.body.classList.remove("collapsed");
  document.body.classList.add("overlay-mode");
});

visableModeBtn.addEventListener("click", (e) => {
  document.body.classList.add("collapsed");
  document.body.classList.remove("overlay-mode");
});

menuBtn.addEventListener("click", () => {
  if (document.body.classList.contains("overlay-mode")) {
    document.body.classList.add("open");
  }
  {
    document.body.classList.toggle("collapsed");
  }
});

closeBtn.addEventListener("click", (e) => {
  if (document.body.classList.contains("overlay-mode")) {
    document.body.classList.remove("open");
  }
});

chatBtn.addEventListener("click", (e) => {
  chatBox.classList.toggle("show");
});
