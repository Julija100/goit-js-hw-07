const textElement = document.querySelector("#text");

document
  .querySelector("#font-size-control")
  .addEventListener("input", (event) => {
    textElement.style.fontSize = `${event.target.value}px`;
  });
