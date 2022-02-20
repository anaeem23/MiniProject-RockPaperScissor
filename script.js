var Rock = document.querySelector(".Rock");
var Paper = document.querySelector(".Paper");
var Scissor = document.querySelector(".Scissor");
var userChoice = document.querySelector("#userChoice");
var compChoice = document.querySelector("#compChoice");
var winner = document.querySelector("#winner");
var leftSection = document.querySelector("#leftSection");
var middleSection = document.querySelector("#middleSection");
var rightSection = document.querySelector("#rightSection");
var decision = "";


// Computer Choice
function random(items) {
    return items[Math.floor(Math.random() * items.length)];
}
var items = ["ROCK", "PAPER", "SCISSOR"];
var computerChoice = random(items);

Rock.onclick = function () {
  rockClick()
};
Paper.onclick = function () {
  paperClick()
};
Scissor.onclick = function () {
  scissorClick()
};


// Computer Choice
function random(items) {
    return items[Math.floor(Math.random() * items.length)];
}
var items = ["ROCK", "PAPER", "SCISSOR"];
var computerChoice = random(items);



function rockClick() {
  userChoice.textContent = "You Chose";
  leftSection.textContent = "Rock";
  
  compChoice.textContent = `Computer Chose ${computerChoice}`;


  if (computerChoice === "ROCK") {

    decision = "TIE"
      
  } else if (computerChoice === "PAPER") {
      decision = "Computer"
  } else {
      decision = "You"
  }


  winner.textContent = `The Winner is ${decision}`;
}

function paperClick() {
  userChoice.textContent = "You Chose";
  leftSection.textContent = "Paper";
  winner.textContent = "The Winner is XXXX";
  compChoice.textContent = `Computer Chose ${computerChoice}`;
}

function scissorClick() {
  userChoice.textContent = "You Chose";
  leftSection.textContent = "Scissor";
  winner.textContent = "The Winner is XXXX";
  compChoice.textContent = `Computer Chose ${computerChoice}`;
}
