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
    timesGuessed +=1;
    guessedList.push(guessedWord); 
    numberOWords +=1;
    console.log(guessedList)
    guessedWord = "";
    console.log("You guessed");
  }else{
    wrongGuess("Not in word list");
  }
}