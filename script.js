var Rock = document.querySelector(".Rock");
var Paper = document.querySelector(".Paper");
var Scissor = document.querySelector(".Scissor");
var userChoice = document.querySelector("#userChoice");
var compChoice = document.querySelector("#compChoice");
var winner = document.querySelector("#winner");
var leftSection = document.querySelector("#leftSection");
var middleSection = document.querySelector("#middleSection");
var rightSection = document.querySelector("#rightSection");
var button = document.querySelector(".Button");
var win = "CONGRATS!! YOU WON";
var lose = "OOPS. YOU LOST";
var tie = "ITS A TIE";
var winScore = 0;
var lossScore = 0;
var tieScore = 0;

function gameStart() {
  // Computer Choice
  function random(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  var items = ["ROCK", "PAPER", "SCISSOR"];
  var computerChoice = random(items);

  Rock.onclick = function () {
    rockClick();
  };
  Paper.onclick = function () {
    paperClick();
  };
  Scissor.onclick = function () {
    scissorClick();
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
    rightSection.textContent = computerChoice;

    compChoice.textContent = `Computer Chose`;

    if (computerChoice === "ROCK") {
      winner.textContent = tie;
      tieScore++;
    } else if (computerChoice === "PAPER") {
      winner.textContent = lose;
      lossScore++;
    } else {
      winner.textContent = win;
      winScore++;
    }

    middleSection.textContent = `Win: ${winScore}
  Loss: ${lossScore} 
  Tie: ${tieScore}`;

    middleSection.style.fontSize = "75px";
    createBTN();
  }

  function paperClick() {
    userChoice.textContent = "You Chose";
    leftSection.textContent = "Paper";
    rightSection.textContent = computerChoice;
    compChoice.textContent = `Computer Chose`;

    if (computerChoice === "ROCK") {
      winner.textContent = win;
      winScore++;
    } else if (computerChoice === "PAPER") {
      winner.textContent = tie;
      tieScore++;
    } else {
      winner.textContent = lose;
      lossScore++;
    }

    middleSection.textContent = `Win: ${winScore}
  Loss: ${lossScore} 
  Tie: ${tieScore}`;

    middleSection.style.fontSize = "75px";
    createBTN();
  }

  function scissorClick() {
    userChoice.textContent = "You Chose";
    leftSection.textContent = "Scissor";
    rightSection.textContent = computerChoice;
    compChoice.textContent = `Computer Chose`;

    if (computerChoice === "ROCK") {
      winner.textContent = lose;
      lossScore++;
    } else if (computerChoice === "PAPER") {
      winner.textContent = win;
      winScore++;
    } else {
      winner.textContent = tie;
      tieScore++;
    }

    middleSection.textContent = `Win: ${winScore}
  Loss: ${lossScore} 
  Tie: ${tieScore}`;

    middleSection.style.fontSize = "75px";
    createBTN();
  }
}

function createBTN() {
  var btn = document.createElement("button");
  btn.textContent = "PLAY AGAIN?";

  button.appendChild(btn);
  
  btn.onclick = function () {
    gameRestart()
    btn.remove()
  }
}

function gameRestart() {
  
  userChoice.textContent = "";
  leftSection.textContent = "ROCK";
  middleSection.textContent = "PAPER"
  rightSection.textContent = "SCISSOR";
  compChoice.textContent = "";
  winner.textContent = "";
  middleSection.style.fontSize = "150px";

  gameStart()
}


gameStart()