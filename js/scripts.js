let game = new Game();
// Game logic
function Game() {
  this.players = [];
  this.turn = 0
}
//Player Logic
function Player(name) {
  this.name = name;
  this.total = 0
}
Game.prototype.addPlayer = function (player){
  this.players.push(player);
};

//Business Logic 

function diceRoll(min, max) {
  let intNum = Math.random() * (max - min) +min;
  return Math.floor(intNum);
}

// function storeRoundTotal() {
//   let roundTotal = 0;
//   let diceNumber = diceRoll(1, 7);
//   roundTotal += diceNumber;
//   return roundTotal;
// 

//UI Logic

function addPlayers(event) {
  event.preventDefault(); 
  let gameDiv = document.querySelector(".hidden");
  let formDiv = document.querySelector(".startForm");
  player1Input = document.getElementById("player1Name").value;
  player2Input = document.getElementById("player2Name").value
  player1 = new Player(player1Input);
  player2 = new Player(player2Input);
  game.addPlayer(player1);
  game.addPlayer(player2);
  gameDiv.classList.remove("hidden");
  formDiv.classList.add("hidden");
}

function handleDiceRoll() {
  let pTotal = document.getElementById("roundTotalP");
  let pInt = parseInt(pTotal.innerText);
  let p = document.getElementById("pDice");
  p.innerText = null;
  let dice = diceRoll(1, 7);
  p.append(dice);
  pInt += dice;
  pTotal.innerText = pInt.toString();
}


// function handleTotal() {
//   let pTotal = document.getElementById("roundTotalP");
//   let player1Total =
// }

function switchPlayer() { // game.turn += 1 or -= 1
                          // switchPlayer = 1 or 0
     if (game.turn === 0) {
      game.turn = 1
      console.log(game.turn)
     }                   
     else if (game.turn === 1) {
      game.turn = 0 
      console.log(game.turn)     
     }


}


window.addEventListener("load", function() {
  document.querySelector("form#startGame").addEventListener("submit", addPlayers);
  document.querySelector("button#roll").addEventListener("click", handleDiceRoll);
  document.querySelector("button#hold").addEventListener("click", handleTotal);
});