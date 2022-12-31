function wrongGuess(string){
  console.log(string);
}
//keypressed 
function wordwasguessed(){
  console.log(guessedWord);
  if (wordsList.includes(guessedWord.toLowerCase())){
    guessedWord.toLowerCase;
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