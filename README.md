step 1 (objects)
-make a game object
-make a player object
  -holds total number
  -holds player name?
-make a round total object
  -Round: value
 * -on hold round:value  += player.number
  - 0 on hold, or 1 end turn
Step 2 (math and functions)
-how are we going to determine turns? (func?) > or <
  -on hold, round total will += player whose turn ended number
  -turn signal should switch 
  -"flag" player2.total to be added
  - and round total will 0
  -on "1" round end
-dice roll function (rng)
  -generate value 1-6;
  - dice number += round: value
  - if dice number = 1, round total = 0, turn is over
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

test: 