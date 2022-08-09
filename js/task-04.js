const counterValue = document.getElementById("value");
const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
let newNum;

plusBtn.addEventListener("click", function () {
  newNum = Number(counterValue.innerHTML) + 1;
  counterValue.innerHTML = newNum;
});

minusBtn.addEventListener("click", function () {
  newNum = Number(counterValue.innerHTML) - 1;
  counterValue.innerHTML = newNum;
});
