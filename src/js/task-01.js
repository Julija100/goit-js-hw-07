const categoryCount = document.querySelectorAll(
  "ul#categories > li.item"
).length;
console.log(`В списке ${categoryCount} категории.`);

const liElements = document.querySelectorAll("ul#categories > li.item");

liElements.forEach((element) => {
  const titleElement = element.querySelector("h2");
  const categoryLiElements = element.querySelectorAll("ul li");
  console.log(`Категория: ${titleElement.textContent}`);
  console.log(`Количество элементов: ${categoryLiElements.length}`);
});
