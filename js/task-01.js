const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of Categories:", numberOfCategories.length);
numberOfCategories.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent} Elements:`,
    item.lastElementChild.children.length
  );
});
