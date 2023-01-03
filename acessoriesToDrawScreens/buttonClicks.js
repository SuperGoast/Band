var yspace = 50;
//function freePlayClick(){
   // freePlay = true;
   // drawGameScreen();
//}
function startClick(){
    var timesPlayed = 0; 
   // challenge = true;
    drawGameScreen();
}
function endClick(){
    drawResultsScreen();
}
function replayClick(){
    drawGameScreen();
    //if(challenge = true){
    // timesPlayed += 1; 
    //}
}
function homeClick(){
    drawInstructions();
    //freePlay = false; 
    //challenge = false; 
}
function leaderBoardClick(){
    drawResultsScreen();
}

