var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaArr = Array.from(alphabet);
var alphaNumsArr = [[0],[0], [0], [0], [0]];
var letter = ""
for( let i=0; i< wordList.length; i++){
    var word = wordList[i];
    var listOChar = Array.from(word);
    for( let j=0; j<alphabet.length; j++ ){
        letter = alphabet.charAt(j);
        for(let k=0; k<listOChar.length; k++){
            if(word.charAt(k) == letter){
                //console.log(alphaNumsArr);
                //console.log("j = " + j + " k = " + k);
                alphaNumsArr[k][j] += 1;
            }
        }
    }
}
for(let k=0; k<alphaArr.length; k++){
    alphaNumsArr.push(alphaArr[k]);
}
for(let i=0; i<5; i++){
    alphaNumsArr.pop();
    console.log(alphaNumsArr);
    for(let k=0; k<alphaNumsArr.length; k++){
        alphaNumsArr[i][k] /= wordList.length; 
        console.log(alphaNumsArr[i][k]);
    }
}
