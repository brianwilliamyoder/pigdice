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

//UI Logic

function addPlayers(event) {
  event.preventDefault(); 
  let gameDiv = document.querySelector(".hidden");
  let formDiv = document.querySelector(".startForm");
  player1Input = document.getElementById("player1Name").value;
  player2Input = document.getElementById("player2Name").value;
  player1 = new Player(player1Input);
  player2 = new Player(player2Input);
  game.addPlayer(player1);
  game.addPlayer(player2);
  document.getElementById("player1Header").innerText = game.players[0].name;
  document.getElementById("player2Header").innerText = game.players[1].name;
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
  if (dice === 1) {
    switchPlayer();
    pTotal.innerText = 0
    document.getElementById("hold").classList.add("hidden");
    if (game.players[1].name === "computer") {
      computerStrategy(); 
    } else {
      
    }
  } else { 
    pInt += dice;
    pTotal.innerText = pInt.toString();
    document.getElementById("hold").classList.remove("hidden");
  
  }
}
 
function handleTotal() {
  let pTotal = document.getElementById("roundTotalP");
  let pInt = parseInt(pTotal.innerText);
  let player1total = document.getElementById("player1Total");
  let player2total = document.getElementById("player2Total");
  if (game.turn === 0) {
    game.players[0].total += pInt;
    switchPlayer();
    pTotal.innerText = 0;
    player1total.innerText = game.players[0].total;
    document.getElementById("hold").classList.add("hidden");
  } 
  else if (game.turn === 1) {
    game.players[1].total += pInt;
    switchPlayer();
    pTotal.innerText = 0;
    player2total.innerText = game.players[1].total;
    document.getElementById("hold").classList.add("hidden");
  }
  onWin();
}

function switchPlayer() { 
  let arrow = document.getElementById("indicator")                       
     if (game.turn === 0) {
      arrow.innerText = "->"
      game.turn = 1
     }                   
     else if (game.turn === 1) {
      arrow.innerText = "<-"
      game.turn = 0 
     }
}

function handleReset() {
  location.reload()
}
 function onWin(){
  let player1 = game.players[0];
  let player2 = game.players[1];
  let gameDiv = document.getElementById("game1");
  let winDiv = document.getElementById("winMessage");
  
  if (player1.total >= 100){
    gameDiv.classList.add("hidden");
    winDiv.classList.remove("hidden");
    document.getElementById("playerName").innerText = game.players[0].name; 
  } else if (player2.total >=100) {
    gameDiv.classList.add("hidden");
    winDiv.classList.remove("hidden");
    document.getElementById("playerName").innerText = game.players[1].name; 
  }

 }

 function computerPlayer() {
  player2Input = document.getElementById("player2Name").value = "computer"
  addPlayers();
 }

 function computerStrategy(){
  let computerRoll = document.getElementById("computerRoll");
  let diceNumber = document.getElementById("pDice").innerText;
  document.getElementById("roll").click();
  computerRoll.innerText = "Computer has rolled a :" + diceNumber;
    if (document.getElementById("pDice").innerText != 1){
     document.getElementById("roll").click();
     computerRoll.innerText = "Computer has rolled a :" + diceNumber;
      if (document.getElementById("pDice").innerText != 1){
        handleTotal(); }
    }
  computerRoll.innerText = null   
 }
 

window.addEventListener("load", function() {
  document.querySelector("form#startGame").addEventListener("submit", addPlayers);
  document.querySelector("button#roll").addEventListener("click", handleDiceRoll);
  document.querySelector("button#hold").addEventListener("click", handleTotal);
  document.querySelector("button#playAgainButton").addEventListener("click", handleReset);
  // ...................("button#playComputer")...................("click", computerPlayer)
});