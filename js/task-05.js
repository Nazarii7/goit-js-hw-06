const inPut = document.querySelector("input");
const outPut = document.querySelector("span");

inPut.addEventListener("input", (event) => {
  outPut.textContent = event.currentTarget.value;
});
