"use strict";
let msg = document.querySelector(".message");
let guessEl = document.querySelector(".guess");
let scoreDiv = document.querySelector(".score");
let highscoreDiv = document.querySelector(".highscore");
let secretNumberDiv = document.querySelector(".number");

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Function to display a message
function displayMsg(message) {
  msg.textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessEl.value);

  // When there's no input or number is zero
  if (!guess) {
    displayMsg("⛔ No number");

    // When the guessed number equals to the secret number
  } else if (guess === secretNumber) {
    displayMsg("🎉 Correct number!");
    document.body.style.backgroundColor = "#60b347";
    secretNumberDiv.style.width = "30rem";
    secretNumberDiv.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreDiv.textContent = highscore;
    }

    // When the guessed number is not equal to the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreDiv.textContent = score;
    } else {
      scoreDiv.textContent = 0;
      displayMsg("💥 You lost the game!");
    }
  }
});

// When the player press again button
document.querySelector(".again").addEventListener("click", function () {
  displayMsg("Start guessing...");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumberDiv.textContent = "?";
  guessEl.value = "";
  scoreDiv.textContent = score;
  secretNumberDiv.style.width = "15rem";
  document.body.style.backgroundColor = "#222";
});
