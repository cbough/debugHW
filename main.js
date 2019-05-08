// ROCK,PAPER,SCISSORS
let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
  return array[(Math.floor(Math.random()*3))];
}


function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

  let computerChoice = randomFrom(computerChoices);
  console.log("Computer's choice", computerChoice);
  console.log("Player's choice", input);

  if (computerChoice == "rock" && input == "scissors"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice == "scissors" && input == "paper"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice == "paper" && input == "rock"){
    alert("Computer wins!");
    return false;
  } else if (computerChoice == "paper" && input == "paper"){
    alert("Draw");
    return false;
  } else if (computerChoice == "rock" && input == "rock"){
    alert("Draw");
    return false;
  } else if (computerChoice == "scissors" && input == "scissors"){
    alert("Draw");
    return false;
  } else if (computerChoice == "rock" && input == "paper"){
    alert("Player wins!");
    return false;
  } else if (computerChoice == "scissors" && input == "rock"){
    alert("Player wins!");
    return false;
  } else if (computerChoice == "paper" && input == "scissors"){
    alert("Player wins!");
    return false;
  } else
    alert("Not a valid input");
    return false;
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    playerInput = playerInput.toLowerCase();
    gameOver = checkInput(playerInput, computerChoices);
  }
}
start(gameOver, computerChoices);

// SPY ENCODER

function encode(word) {
  let result = [];
for(let position in word) {
  result.push(word.charCodeAt(position));
}
return result.join(':');
}

function decode(hash) {
let arr = hash.split(':');
let result = [];
for(let code of arr) {
  result.push(String.fromCharCode(code));
  }
  return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
