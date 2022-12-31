function wrongGuess(string){
  console.log(string);
  var wronged = guessedWord;
  guessedWord = "WRONG";
  drawGuessedWord("#ff0000");
  guessedWord = wronged;
  delay(1000).then(() => drawGuessedWord("#ffffff"));
}
//keypressed 
function wordwasguessed(){
  console.log(guessedWord);
  if (wordsList.includes(guessedWord.toLowerCase())){
    var colorList = [""];
    for(let i = 0; i<6; i++){
      guessedWord = guessedWord.toLowerCase();
      var letterGW = guessedWord.charAt(i);
      var letterCW = chosenWord.charAt(i);
      var index = chosenWord.indexOf(letterGW);
      if(letterCW == letterGW){
        color = "#009900";
      }else if(index != -1 ){
        color = "#ffcc00";
      }else{
        color = "#cccccc"; 
      }
      colorList.push(color);
    }
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
    wrongGuess("Not in word list");
  }
}