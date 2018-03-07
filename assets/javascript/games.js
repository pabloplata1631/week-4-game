//GLOBAL VARIABLER 
var crystal ={
    warriors:
    {
        name:"warriors",
        value: 0
    },
    mavs:
    {
        name:"Mavs",
        value:0,
    },
    lakers:
    {
        name:"Lakers",
        value:0,
    },
    pelicans:
    {
        name:"Pelicans",
        value:0,
    }

};

//scores (current and Target)
var currentScore = 0;
var targetScore = 0;

// wins and losses 
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
var getRandom= function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//Starts the Game and rests game
var startGame = function (){
  
    currentScore=0;
    
    // set a new target score (between 19 and 120)
    targetScore = getRandom(19, 120);
   //Setting differnet values each time from 1 to 12
   crystal.warriors.value = getRandom(1, 12);
   crystal.mavs.value = getRandom(1, 12);
   crystal.lakers.value = getRandom(1, 12);
   crystal.pelicans.value = getRandom(1, 12);


   $("#yourScore").html(currentScore);
   $("#targetScore").html(targetScore);


   console.log("-------------")
   console.log("target score: " + targetScore);
   console.log("warrioirs " + crystal.warriors.value + " |  Mavs: " + crystal.mavs.value + " | Lakers " + crystal.lakers.value + " | Peilicans " + crystal.pelicans.value);
   console.log("-------------")
};

//"YourScore changes when crystals are clicked"
var addValues = function(crystal){
    currentScore=currentScore + crystal.value;
    $("#yourScore").html(currentScore);

//below is calling checkWin function 
 checkWin();

    console.log("Your Score " + currentScore);
}

//Check if user won or loss
var checkWin = function(){

    /// check if currentScore if > than Target Score
    if(currentScore > targetScore){
        alert("GAME OVER!!");
        console.log("GAME OVER!!");

        // add score to lossCounter 
        lossCount++;
        
        //change lost count html
        $("#lossCount").html(lossCount);

        //Restarting Games
        startGame();
    }
    else if( currentScore == targetScore){
        alert("YOU WON!");
        console.log("YOU WON!");

// add score to lossCounter 
        winCount++;

        // Change win count html 
        $("#winCount").html(winCount);

        //Restarting Game 
        startGame();
    }

}


//Mainn PRocess

//yellow - warriors
//blue - mavs 
//mamba - La
//red - Pelicans
startGame();

$("#yellow").click(function(){
    addValues(crystal.warriors);
});

$("#blue").click(function(){
    addValues(crystal.mavs);
});
$("#mamba").click(function(){
    addValues(crystal.lakers);
});
$("#red").click(function(){
    addValues(crystal.pelicans);
});