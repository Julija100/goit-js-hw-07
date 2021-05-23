const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    parseInt(event.target.getAttribute("data-length"))
  ) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
