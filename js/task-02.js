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
titleEl.append(
  listFirst,
  listSecond,
  listThird,
  listFourth,
  listFifth,
  listSixth
);
console.log(titleEl);
