const flipCard = document.getElementById("flip-card");
const flipButton = document.getElementById("flip-button");

flipButton.addEventListener("click", () => {
  flipCard.checked = !flipCard.checked;
  flipButton.setAttribute("aria-pressed", String(flipCard.checked));
});
