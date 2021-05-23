let counterValue = 0;

document.querySelectorAll("button").forEach((buttonElement) => {
  buttonElement.onclick = (event) => {
    const action = event.target.getAttribute("data-action");

    switch (action) {
      case "increment":
        ++counterValue;
        break;
      case "decrement":
        --counterValue;
        break;
    }

    document.querySelector("#value").textContent = counterValue;
  };
});
