const outputElement = document.querySelector("#name-output");

document.querySelector("#name-input").addEventListener("input", (event) => {
  if (event.target.value === "") {
    outputElement.textContent = "незнакомец";
  } else {
    outputElement.textContent = event.target.value;
  }
});
