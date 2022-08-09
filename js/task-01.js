const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of Categories:", numberOfCategories.length);
numberOfCategories.forEach((item) => {
  console.log("Category: Elements:", item.lastElementChild.children.length);
});
