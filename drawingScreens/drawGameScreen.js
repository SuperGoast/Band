function drawGameScreen(){
  let img = document.createElement("img");
    img.onload = start;  
    img.src = "background.png";
  var leaderBoardBtn = document.createElement("button");
      leaderBoardBtn.style.width = '200px'; // setting the width to 200px
      leaderBoardBtn.style.height = '50px';
      leaderBoardBtn.style.position = "absolute";
      leaderBoardBtn.style.left = "55%";
      leaderBoardBtn.innerHTML = "End Game";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(leaderBoardBtn);
      leaderBoardBtn.addEventListener ("click", function() {
        leaderBoardClick();
        document.body.removeChild(leaderBoardBtn);
        document.body.removeChild(homeBtn);
      });
      var homeBtn = document.createElement("button");
      homeBtn.style.width = '200px'; // setting the width to 200px
      homeBtn.style.height = '50px';
      homeBtn.style.position = "absolute";
      homeBtn.style.left = "35%";
      homeBtn.innerHTML = "Home";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(homeBtn);
      homeBtn.addEventListener ("click", function() {
        homeClick();
      });
  /*if( freePlay == true){
  var randomNumber =(Math.random()*(wordList.length));
  chosenWord = wordList[randomNumber | 0];
  console.log(chosenWord);
  }else{
    chosenWord = "money";
  }*/
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