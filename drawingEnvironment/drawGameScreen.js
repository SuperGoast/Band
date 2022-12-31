function drawGameScreen(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
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