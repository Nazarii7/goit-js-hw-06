const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listFirst = document.createElement("li");
listFirst.textContent = "Potatoes";
listFirst.classList.add("item");

const listSecond = document.createElement("li");
listSecond.textContent = "Mushrooms";
listSecond.classList.add("item");

const listThird = document.createElement("li");
listThird.textContent = "Garlic";
listThird.classList.add("item");

const listFourth = document.createElement("li");
listFourth.textContent = "Tomatos";
listFourth.classList.add("item");

const listFifth = document.createElement("li");
listFifth.textContent = "Herbs";
listFifth.classList.add("item");

const listSixth = document.createElement("li");
listSixth.textContent = "Condiments";
listSixth.classList.add("item");

const titleEl = document.querySelector("ul");

titleEl.insertBefore(listFirst, titleEl.children[0]);
titleEl.insertBefore(listSecond, titleEl.children[1]);
titleEl.insertBefore(listThird, titleEl.children[2]);
titleEl.insertBefore(listFourth, titleEl.children[3]);
titleEl.insertBefore(listFifth, titleEl.children[4]);
titleEl.insertBefore(listSixth, titleEl.children[5]);
console.log(titleEl);
