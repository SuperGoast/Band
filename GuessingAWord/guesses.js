function wrongGuess(string){
  console.log(string);
  var wronged = guessedWord;
  guessedWord = "WRONG";
  drawGuessedWord("#ff0000");
  guessedWord = wronged;
  //delay(1000).then(() => drawGuessedWord("#ffffff"));
  drawGuessedWord("#ffffff");
}
var timesGuessedRight = 0; 
//keypressed 
function wordwasguessed(){
  var bannedWord = false; 
  if (guessedWord.toLowerCase() == chosenWord){
    if (timesGuessed == 0){
    score += 800; 
    }else{
    score += (700 - timesGuessed* 100);
    }
    timesGuessedRight +=1;
    if (timesGuessedRight == chosenPhrase.length){
      drawResultsScreen();
    }else{
    
    drawGuessedWord("#ff0000");
    setTimeout(1000);
    drawGuessedWord("#ffffff");
      guessedWord = "";
      chosenWord = chosenPhrase[timesGuessedRight];
    }
  }else{
    console.log(guessedWord);
    var scoreNum = 0; 
    if (wordList.includes(guessedWord.toLowerCase())){
      var colorList = [""];
      for(let i=0; i<6; i++){
        guessedWord = guessedWord.toLowerCase();
        var letterGW = guessedWord.charAt(i);
        var letterCW = chosenWord.charAt(i);
        var index = chosenWord.indexOf(letterGW);
        if(letterCW == letterGW){
          color = "#009900";
          if(listOCorrectLetters[i]!=letterGW){
          score = 100+(10*(6-timesGuessed));
          listOCorrectLetters.push(letterGW);
          }
        }else if(index != -1 ){
          color = "#ffcc00";
          scoreNum = alphabet.indexOf(letterGW);
          score -= alphaNumsArr[i][scoreNum];
        }else{
          bannedLetters.push(letterGW);
          color = "#cccccc"; 
          bannedWord = true; 
        }
        colorList.push(color);
      }
      if(bannedWord == false){
      guessedWord = guessedWord.toUpperCase();
      drawRects(colorList[1], colorList[2], colorList[3], colorList[4], colorList[5], 1, false, numberOWords);
      drawGuessedWord('transparent');
      guessedList.push(guessedWord); 
      timesGuessed +=1;
      numberOWords +=1;
      console.log(guessedList)
      guessedWord = "";
      console.log("You guessed");
      }else{
        wrongGuess("banned word");
      }
    }else{
      wrongGuess("Not in word list");
    }
  }
}