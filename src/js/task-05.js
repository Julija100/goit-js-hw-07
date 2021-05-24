const outputElement = document.querySelector("#name-output");

document
  .querySelector("#name-input")
  .addEventListener("input", ({ target: { value } }) => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      outputElement.textContent = "незнакомец";
    } else {
      outputElement.textContent = trimmedValue;
    }
  });
