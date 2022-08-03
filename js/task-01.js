const numberOfCategories = document.querySelector("ul");
console.log("Number Of Categories:", numberOfCategories.children.length);

console.log(
  "Category: Animals Elements:",
  numberOfCategories.firstElementChild.children[1].children.length
);

console.log(
  "Category: Products Elements:",
  numberOfCategories.children[1].children[1].children.length
);

console.log(
  "Category: Technologies Elements:",
  numberOfCategories.lastElementChild.children[1].children.length
);

// const catOfAll = document.querySelector("ul");
// console.log(
//   "Category: Animals Elements:",
//   catOfAll.children[0].children[1].children.length
// );

// console.log(
//   "Category: Products Elements:",
//   catOfAll.children[1].children[1].children.length
// );

// console.log(
//   "Category: Technologies Elements:",
//   catOfAll.children[2].children[1].children.length
// );
