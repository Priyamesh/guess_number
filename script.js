"use strict";

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const updateScore = document.querySelector(".score");
let score = 20;
let highscore = 0;

function gamelogic(inputValue) {
  let outputMessage = document.querySelector(".message");
  if (!inputValue || inputValue < 0 || inputValue > 20) {
    outputMessage.textContent = `❌ Invalid Input`;
  } else if (inputValue === randomNumber) {
    outputMessage.textContent = `Jeet gaye bhai jeet gye`;
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (inputValue > randomNumber) {
    if (score > 1) {
      score--;
      outputMessage.textContent = `High`;
      updateScore.textContent = score;
    } else {
      outputMessage.textContent = `khatam.. tata good bye`;
      updateScore.textContent = --score;
    }
  } else if (inputValue < randomNumber) {
    if (score > 1) {
      score--;
      outputMessage.textContent = `Low`;
      updateScore.textContent = score;
    } else {
      outputMessage.textContent = `khatam.. tata good bye`;
      updateScore.textContent = --score;
    }
  }
}

function checkbutton() {
  const inputValue = Number(document.querySelector(".guess").value);
  //console.log(inputValue, typeof inputValue);
  gamelogic(inputValue);
}

function resetAll() {
  console.log("btn clicked");
  score = 20;
  updateScore.textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = `Start guessing...`;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = `?`;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}
checkBtn.addEventListener("click", checkbutton);
againBtn.addEventListener("click", resetAll);
