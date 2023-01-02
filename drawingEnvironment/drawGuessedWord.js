function drawGuessedWord(color){
    xcoord = 490; 
    ycoord = 50;
    yspace = 70;
    xspace = 70; //this is the y space
    var tempguessedWord = "";
    drawRects(color,color,color,color,color, 1 ,true, (numberOWords));
    xcoord = 490;
    if(numberOWords<6){
        ctx.beginPath();
        for(var j = 0; j<(numberOWords+1 ); j++){
            //for(var k = 0; k< ((guessedList.length)/5); k++){
            if(j==0){
                ycoord = 60 + (yspace * timesGuessed);
                //guessedWord is still 
                tempguessedWord = guessedWord;
            }else{
                ycoord = 60 + (yspace* (j-1));
                tempguessedWord = guessedList[j];
                console.log(guessedList[j]);
                xcoord = 490;
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
                console.log(tempguessedWord.charAt(i));
                console.log("maybe written");
                ctx.fillText(tempguessedWord.charAt(i),xcoord, (ycoord + parseInt(yspace/2)));
                xcoord += 70; 
            }
        }
        ctx.closePath();
    }
    xcoord = 475; 
    ycoord = 50;
}