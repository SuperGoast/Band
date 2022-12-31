function drawGuessedWord(){
    xcoord = 400; 
    ycoord = 50;
    yspace = 70;
    xspace = 70; //this is the y space
    var tempguessedWord = "";
    drawRects();
    xcoord = 415;
    ctx.beginPath();
    for(var j = 0; j<(numberOWords +1 ); j++){
        //for(var k = 0; k< ((guessedList.length)/5); k++){
        if(j==0){
            ycoord = 60 + (yspace * timesGuessed);
            //guessedWord is still 
            tempguessedWord = guessedWord ;
        }else if(j == 1){
            ycoord = 60 ;
            tempguessedWord = guessedList;
            console.log(guessedList);
            xcoord -= 70;
        }else if(j == 2){
            ycoord = 60 ;
            tempguessedWord = guessedList;
            console.log(guessedList);
            xcoord -= 70;
        }else if(j == 3){
            ycoord = 60 ;
            tempguessedWord = guessedList;
            console.log(guessedList);
            xcoord -= 70;
        }else if(j == 4){
            ycoord = 60 ;
            tempguessedWord = guessedList;
            console.log(guessedList);
            xcoord -= 70;
        }else if(j == 5){
            ycoord = 60 ;
            tempguessedWord = guessedList;
            console.log(guessedList);
            xcoord -= 70;
        }
        //}
        console.log("in loop");
        length = tempguessedWord.length;
        //if (numberOWords > 0){
          //  length -= numberOWords;
        //}
        for(let i=0; i<(length); i++){
            ctx.font = "50px Courier";
            ctx.fillStyle = "#000000";
            console.log(guessedWord.charAt(i));
            console.log("maybe written");
            ctx.fillText(guessedWord.charAt(i),xcoord, (ycoord + parseInt(yspace/2)));
            xcoord += 70; 
        }
    }
    ctx.closePath();
    xcoord = 400; 
    ycoord = 50;
}