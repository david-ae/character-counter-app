const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.querySelector(".total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");
const maxLength = textareaEl.getAttribute("maxLength");

totalCounterEl.innerText = 0;
remainingCounterEl.innerHTML = maxLength;

textareaEl.addEventListener("keyup", (e) => {
  updateCounter();
});

function updateCounter() {
  const currentCharacterLength = textareaEl.value.length;
  totalCounterEl.innerText = currentCharacterLength;
  remainingCounterEl.innerText = maxLength - currentCharacterLength;
}
