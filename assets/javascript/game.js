//Global variables referenced by multiple functions:

var gem1;

var gem2;

var gem3;

var gem4;


//On loading the page, begin all subsequent functions.



$(document).ready(function () {
    console.log("ready!");

//Variables to be considered throughout the game.

//target number should be between 19-120
var targetNumber = Math.floor(Math.random()* 101 +19);
   console.log("Target: " + targetNumber);

var wins = 0;
    console.log("Wins: " + wins);

var losses = 0;
    console.log("Losses: " + losses);

var playerNumber = 0;
    console.log("Current Player Total: " + playerNumber);




//Display wins, losses and player's starting number at begining of game.

$('#wins').text(wins);
$('#losses').text(losses);
$('#playerNumber').text(playerNumber);

//Display the target number chosen randomly

$('#targetNumber').text(targetNumber);

//Reset function to be triggered at start of a new game, when either win or loss conditions have been met.

function startGame(){
  targetNumber=Math.floor(Math.random()* 101)+ 19;
$('#targetNumber').text(targetNumber);
gem1= Math.floor(Math.random()*11+1);
gem2= Math.floor(Math.random()*11+1);
gem3= Math.floor(Math.random()*11+1);
gem4= Math.floor(Math.random()*11+1);  
playerNumber = 0;
$('#playerNumber').text(playerNumber);
console.log("This reset to 0 properly: " + playerNumber);
}

//function for winning

// function winGame(){
// wins++;
// $('#wins').text(wins);
// startGame();

// }


// //function for losing

// function loseGame(){
// losses++;
// $('#losses').text(losses);
// startGame();
// }


//Assigning random numbers 1-12 for each gem

var gem1= Math.floor(Math.random()*11+1);
console.log(gem1);
var gem2= Math.floor(Math.random()*11+1);
console.log(gem2);
var gem3= Math.floor(Math.random()*11+1);
console.log(gem3);
var gem4= Math.floor(Math.random()*11+1);
console.log(gem4);


//GEM 1
//Player clicks on the gems to add their random values to the playerNumber
$("#gem1").on("click", function(){
playerNumber += gem1;
console.log("This added to total" + playerNumber);
$('#playerNumber').text(playerNumber);
//If playerNumber > targetNumber, a loss is added and the game resets.
if (playerNumber > targetNumber){
    losses++;
    $("#losses").text(losses);
    alert("Ye got greedy lad; try again.");
    startGame();

}

//If playerNumber = targetNumber, a win is added and the game resets.

if (playerNumber == targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("Well done!  Add it to your trove.");
    startGame();

}







});


//GEM 2
//Player clicks on the gems to add their random values to the playerNumber
$("#gem2").on("click", function(){
    playerNumber += gem2;
    console.log("This added to total" + playerNumber);
    $('#playerNumber').text(playerNumber);
    //If playerNumber > targetNumber, a loss is added and the game resets.
    if (playerNumber > targetNumber){
        losses++;
        $("#losses").text(losses);
        alert("Ye got greedy lad; try again.");
        startGame();
    
    }
    
    //If playerNumber = targetNumber, a win is added and the game resets.
    
    if (playerNumber == targetNumber) {
        wins++;
        $("#wins").text(wins);
        alert("Well done!  Add it to your trove.");
        startGame();
    
    }
    
    
    
    
    
    
    
    });


//GEM 3
//Player clicks on the gems to add their random values to the playerNumber
$("#gem3").on("click", function(){
    playerNumber += gem3;
    console.log("This added to total" + playerNumber);
    $('#playerNumber').text(playerNumber);
    //If playerNumber > targetNumber, a loss is added and the game resets.
    if (playerNumber > targetNumber){
        losses++;
        $("#losses").text(losses);
        alert("Ye got greedy lad; try again.");
        startGame();
    
    }
    
    //If playerNumber = targetNumber, a win is added and the game resets.
    
    if (playerNumber == targetNumber) {
        wins++;
        $("#wins").text(wins);
        alert("Well done!  Add it to your trove.");
        startGame();
    
    }
    
    
    
    
    
    
    
    });


//GEM 4
//Player clicks on the gems to add their random values to the playerNumber
$("#gem4").on("click", function(){
    playerNumber += gem4;
    console.log("This added to total" + playerNumber);
    $('#playerNumber').text(playerNumber);
    //If playerNumber > targetNumber, a loss is added and the game resets.
    if (playerNumber > targetNumber){
        losses++;
        $("#losses").text(losses);
        alert("Ye got greedy lad; try again.");
        startGame();
    
    }
    
    //If playerNumber = targetNumber, a win is added and the game resets.
    
    if (playerNumber == targetNumber) {
        wins++;
        $("#wins").text(wins);
        alert("Well done!  Add it to your trove.");
        startGame();
    
    }
    
    
    
    
    
    
    
    });



});