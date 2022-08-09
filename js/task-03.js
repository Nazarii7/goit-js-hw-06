const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const menuGall = document.querySelector("ul.gallery");
const markUp = createImages(images);
menuGall.insertAdjacentHTML("afterbegin", markUp);
function createImages(images) {
  return images.reduce((acc, image) => (acc += createMarkUp(image)), " ");
}
function createMarkUp({ url, alt }) {
  const itemList = `<li class="item-list list"><img src='${url}' alt='${alt}'  width='${370}' height='${190}'/></li>`;
  return itemList;
}

console.log(menuGall);
