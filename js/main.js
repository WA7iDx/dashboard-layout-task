const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const overlayMenu = document.querySelector(".overlay-screen");

const overlayModeBtn = document.querySelector("#one");
const visableModeBtn = document.querySelector("#two");

const chatBtn = document.querySelector(".chat-icon-img");
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
overlayMenu.addEventListener("click", (e) => {
  if (document.body.classList.contains("overlay-mode")) {
    document.body.classList.remove("open");
  }
});

chatBtn.addEventListener("click", (e) => {
  chatBox.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("chat-icon-img")) {
    return;
  }

  if (chatBox.classList.contains("show")) {
    chatBox.classList.remove("show");
  }
});

const pickUpBtn = document.querySelector(".pick-box-btn");
const pickUpOverlay = document.querySelector(".overlay-pick-up");
const pickUpBox = document.querySelector(".pick-up-box");
const orderBtn = document.querySelector(".order-btn");

pickUpBtn.addEventListener("click", () => {
  pickUpOverlay.classList.add("open");
  pickUpBox.classList.add("open");
});

pickUpOverlay.addEventListener("click", () => {
  pickUpOverlay.classList.remove("open");
  pickUpBox.classList.remove("open");
});

orderBtn.addEventListener("click", () => {
  const iframe = document.createElement("iframe");

  iframe.src = "https://pranx.com/hacker";
  document.body.appendChild(iframe);
});
