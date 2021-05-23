const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulElement = document.querySelector("ul#ingredients");

const liElements = ingredients.map(function (ingredient, index) {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  return liElement;
});

const liElementsHtml = liElements.map((element) => {
  return element.outerHTML;
});

ulElement.insertAdjacentHTML("afterbegin", liElementsHtml.join(""));
