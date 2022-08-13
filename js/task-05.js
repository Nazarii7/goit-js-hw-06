const inPut = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");

inPut.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    outPut.textContent = "Anonymus";
  } else {
    outPut.textContent = event.currentTarget.value;
  }
});
