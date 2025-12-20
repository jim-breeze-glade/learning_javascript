const textInput = document.getElementById("text-input");
const textCounter = document.getElementById("char-count");

textInput.addEventListener("input", (event) => {
  if (textInput.value.length >= 50) {
    textInput.value = textInput.value.substring(0, 50);
    textInput.classList.add("limit");
    textCounter.classList.add("limit");
  } else if (textInput.value.length < 50) {
    textInput.classList.remove("limit");
    textCounter.classList.remove("limit");
  }
  textCounter.textContent = `Character Count: ${event.target.value.length}/50`;
});
