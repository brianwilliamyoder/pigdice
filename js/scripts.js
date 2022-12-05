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
  //this.players[player] = player;
  this.players.push(player);
};

//Business Logic 

function diceRoll(min, max) {
  let intNum = Math.random() * (max - min) +min;
  return Math.floor(intNum);
}

function storeRoundTotal() {
  let roundTotal = 0;
  let diceNumber = diceRoll(1, 7);
  roundTotal += diceNumber;
  return roundTotal;
}

//UI Logic