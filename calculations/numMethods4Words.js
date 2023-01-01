var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphaArr = Array.from(alphabet);
var alphaNumsArr = [[0],[0], [0], [0], [0]];
var letter = "";
for(let pos = 0; pos < 5; pos++){
    for( let iLetter = 0; iLetter < alphabet.length; iLetter++ ){
        letter = alphabet.charAt(iLetter);
        for( let iWord = 0; iWord < wordList.length; iWord++){
            var wordLetter = wordList[iWord].charAt(pos);
            if(wordLetter == letter){
                //console.log(alphaNumsArr[pos][iLetter]);
                //console.log("j = " + j + " k = " + k);
                if (alphaNumsArr[pos][iLetter] == undefined){
                    alphaNumsArr[pos][iLetter] = 0;
                }
                alphaNumsArr[pos][iLetter] += 1;
            }
        }
    }
}
//for(let k=0; k<alphaArr.length; k++){
    //alphaNumsArr.push(alphaArr[k]);
//}
var nwords = wordList.length;
for(let i=0; i<5; i++){
    //alphaNumsArr.pop();
    console.log(alphaNumsArr);
    for(let k=0; k<alphaNumsArr.length; k++){
        alphaNumsArr[i][k] /= nwords; 
        //console.log(alphaNumsArr[i][k]);
    }
}
console.log(alphaNumsArr);
