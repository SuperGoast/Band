
function keyPressed(){
    document.addEventListener('keydown', recordKey);
    function recordKey(e) {
        keypressed = e.key; 
        console.log("You pressed " + e.key);
        switch (e.keyCode) {
        case 8 :
            var length = guessedWord.length; 
            guessedWord = guessedWord.slice(0, (length-1) );
            console.log(guessedWord);
            console.log("Backspace");
            xcoord = 500; 
            ycoord = 50;
            yspace = 70;
            xspace = 70;
            drawGuessedWord("#ffffff");
        break
        case 13: // enter
            if(guessedWord.length == chosenWord.length){
                wordwasguessed();
                console.log("You guessed a word!");
            }else{
                wrongGuess("not long enoguh");
            }
        break
        case 27:
            drawEndScreen();
        break 
        default:
            console.log(String.fromCharCode(e.keyCode));
            if (guessedWord.length < chosenWord.length && (e.keyCode > 64 && e.keyCode < 91)){
                guessedWord+= String.fromCharCode(e.keyCode);
                console.log("in range");
                drawGuessedWord("#ffffff");
            }
            console.log(guessedWord);
        }
    }
}