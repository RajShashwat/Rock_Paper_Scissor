let userScore = 0;
let computerScore = 0;
const userScore_samp = document.getElementById("user-score");
const computerScore_samp = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r1','p1','s1'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter == "r" || letter == "r1") return "Rock";
  if(letter == "p" || letter == "p1") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  userScore++;
  userScore_samp.innerHTML =userScore;
  computerScore_samp.innerHTML =computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`
  userChoice_div.classList.add('green-glow');
  computerChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 700)
  setTimeout(function() {computerChoice_div.classList.remove('red-glow') }, 700)

}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  computerScore++;
  userScore_samp.innerHTML =userScore;
  computerScore_samp.innerHTML =computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lose!`
  userChoice_div.classList.add('red-glow');
  computerChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow') }, 700)
  setTimeout(function() {computerChoice_div.classList.remove('green-glow') }, 700)

}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} to ${convertToWord(computerChoice)}. Its a Draw!`
  userChoice_div.classList.add('gray-glow');
  computerChoice_div.classList.add('gray-glow');

  setTimeout(function() {userChoice_div.classList.remove('gray-glow') }, 700)
  setTimeout(function() {computerChoice_div.classList.remove('gray-glow') }, 700)

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case 'rs1':
    case 'pr1':
    case 'sp1':
     win(userChoice, computerChoice)
     break;
    case 'sr1':
    case 'rp1':
    case 'ps1':
     lose(userChoice, computerChoice)
     break;
    case 'rr1':
    case 'pp1':
    case 'ss1':
     draw(userChoice, computerChoice)
     break;

  }
}

function main () {
  rock_div.addEventListener('click', function() {
    game("r")
  })

  paper_div.addEventListener('click', function() {
    game("p")
  })

  scissors_div.addEventListener('click', function() {
    game("s")
  })
}

main();
