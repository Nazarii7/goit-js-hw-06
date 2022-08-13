const btN = document.querySelector("button.change-color");
const coloR = document.querySelector("span.color");

const setBg = () => {
  const getRandomHexColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  document.body.style.backgroundColor = "#" + getRandomHexColor;
  coloR.innerHTML = "#" + getRandomHexColor;
};

btN.addEventListener("click", setBg);
setBg();
