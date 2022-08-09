const inPut = document.querySelector("input");
const outPut = document.getElementById("name-output");

inPut.addEventListener("input", onInputChange);

function onInputChange(event) {
  outPut.textContent = event.currentTarget.value;
}
