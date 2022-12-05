step 1 (objects)
-make a game object
-make a player object
  -holds total number
  -holds player name?
- addPlayer()  
Step 2 (math and functions)
-dice roll function (rng)
  -generate value 1-6;
  - dice number += round: value
  - if dice number = 1, round total = 0, turn is over
-make a round total function (branching logic that continues to loop that hold gets pressed or a one gets rolled) 
  -Round: value 
 * -on hold round:value  += player.number 
  - 0 on hold, or 1 end turn
-how are we going to determine turns? (func?) > or <
  -on hold, round total will += player whose turn ended number
  -turn signal should switch 
  -"flag" player2.total to be add
  - and round total will 0
  -on "1" round end 
  // game.turn += hold or 1 = +1 to player 2
  //Game.turn += hold or 1 -= 1  to player 1
-turn function
  branching logic listening for "hold" button
  or
  1 rolled in dice roll function. 
step 3
  -how will information will be collected from user?
  -how will it be displayed?
- Round Total "Window" for the round total object
- player 1 & 2 "window" with player.total and player.name  
-dice number "window"
-roll button
-hold button
- player turn signal

TDD
Description: function GameObject()
test: It should create an object for GameObject(); 
code: GameObject()
expected output: Game {}

Description: function Player()
test: it should create a player object
code: player1 = new Player("Lauren", 0)
expected output: player1 {name: Lauren, total: 0}

description addPlayer()
test:  it should create player key inside Game()
code: game.prototpye.newPlayer()
expected output: Game {players: 0}

description: function diceRoll()
test: it should generate a random number between 1 and 6
code: diceRoll()
expected output: a number between 1 and 6

description: function storeRoundTotal()
test: it should store the value of diceRoll()
code: storeRoundTotal()
expected output: roundTotal = a number between 1 and 6



Game {player:0}
> player: 0
>protoype
>addPlayer
>prototype
>object
>....



game.addPlayer("ambi")

let game = new Game()
game
>player:["ambi"] or 1



