//On loading the page, begin all subsequent functions.

$(document).ready(function () {
    console.log("ready!");

// Variables to be considered throughout the game.

//target number should be between 19-120
var targetNumber = Math.floor(Math.random()* 101 +19);
   console.log("Target: " + targetNumber);

var wins = 0;
    console.log("Wins: " + wins);

var losses = 0;
    console.log("Losses: " + losses);

var playerNumber = 0;
    console.log("Current Player Total: " + playerNumber);

var gem1;

var gem2;

var gem3;

var gem4;


//Display wins, losses and player's starting number at begining of game.

$('#wins').text(wins);
$('#losses').text(losses);
$('#playerNumber').text(playerNumber);

//Display the target number chosen randomly

$('#targetNumber').text(targetNumber);

//Reset function to be triggered at start of game, and again when either win or loss conditions have been met.


//function for winning



//function for losing


//Assigning random numbers 1-12 for each gem




//Player clicks on the gems to add their random values to the playerNumber



//If playerNumber = targetNumber, a win is added and the game resets.



//If playerNumber > targetNumber, a loss is added and the game resets.







});