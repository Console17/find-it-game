const container = document.querySelector(".container");
const buttons = [];

const resetGame = () => {
  random = Math.floor(Math.random() * 9);

  buttons[random].classList.add("spot");
};

for (let i = 0; i < 9; i++) {
  const button = document.createElement("button");
  button.textContent = i;
  container.appendChild(button);
  buttons.push(button);
}

console.log(buttons);

let random = Math.floor(Math.random() * 9);
buttons[random].classList.add("spot");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList == "spot") {
      alert("YOU WON");
      buttons[random].classList.remove("spot");
      resetGame();
    } else {
      alert("Try more");
    }
  });
});
