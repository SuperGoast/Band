function drawGameScreen(){
  if( freePlay == true){
  var randomNumber =(Math.random()*(wordList.length));
  chosenWord = wordList[randomNumber | 0];
  console.log(chosenWord);
  }else{
    chosenWord = "money";
  }
  //chosenWord = "coral";
  ctx.beginPath();
  ctx.rect(0, 0, 1400, 800);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath(); 
  xcoord = 475; 
  drawRects("#ffffff","#ffffff","#ffffff","#ffffff","#ffffff",6,true,0);
  drawKeys();
  keyPressed(); 
  /*function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.closePath();
  }
  if the word turns red that means the word is not in 
  the approve word list and therefore cannot be and answer.
  */
}