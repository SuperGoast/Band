var yspace = 50;
function freePlayClick(){
    freePlay = true;
    drawGameScreen();
}
function challengeClick(){
    challenge = true;
    document.body.removeChild(freePlayBtn);
    document.body.removeChild(challengeBtn);
    drawGameScreen();
}
function endClick(){
    drawResultsScreen();
}
function replayClick(){
    drawGameScreen();
}
function homeClick(){
    drawInstructions();
}

