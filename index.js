const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guessInput = document.getElementById("guessNumber");
let submit = document.getElementById("submit");
let alert = document.getElementById("alert");
let running = true;

submit.onclick = function () {
  guess = Number(guessInput.value);
  if (isNaN(guess)) {
    alert.textContent = "Please enter a valid number";
  } else if (guess < minNum || guess > maxNum) {
    alert.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
  } else {
    attempts++;
  }

  if (guess < answer) {
    alert.textContent = "Too LOW! Try again.";
  } else if (guess > answer) {
    alert.textContent = "Too HIGH! Try again.";
  } else {
    alert.textContent = `YOU WIN!! with ${attempts} attempts`;
    alert = alert.style.color = "green";
  }
};
