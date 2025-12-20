const btns = document.querySelectorAll(".emoji-btn");

btns.forEach((button) =>
  button.addEventListener("click", () => updateCount(button)),
);
function updateCount(button) {
  const countEl = button.querySelector(".count");
  let currCount = Number(countEl.textContent.split("/")[0]);

  if (currCount < 10) {
    currCount++;
    countEl.textContent = `${currCount}/10`;
  }
}
