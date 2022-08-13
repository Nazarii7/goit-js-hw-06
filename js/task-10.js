const boX = document.querySelector("#controls");
const tarBox = document.querySelector("#boxes");
const inPut = boX.querySelector('[type="number"]');
const creaTe = boX.querySelector("[data-create]");
const desTroy = boX.querySelector("[data-destroy]");

tarBox.style.display = "flex";
tarBox.style.marginTop = "50px";
tarBox.style.alignItems = "center";

let tarValue = null;

inPut.addEventListener("input", (event) => {
  tarValue = event.currentTarget.value;
});
creaTe.addEventListener("click", () => {
  console.log(createBoxes(tarValue));
});

function createBoxes(tarValue) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < tarValue; i += 1) {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    const color = getRandomHexColor();
    const newBox = document.createElement("div");
    newBox.style.width = `${width}px`;
    width += 10;
    newBox.style.height = `${height}px`;
    height += 10;
    newBox.style.backgroundColor = `${color}`;
    newBox.style.outline = "3px solid black";
    newBox.style.marginRight = "10px";
    newBox.textContent = `${color}`;
    newBox.style.display = "flex";
    newBox.style.justifyContent = "center";
    newBox.style.alignItems = "center";
    newBox.style.fontSize = "8px";
    tarBox.append(newBox);
    desTroy.addEventListener("click", () => {
      newBox.remove();
    });
  }
}
