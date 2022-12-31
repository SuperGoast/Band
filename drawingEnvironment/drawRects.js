function drawRects(){
  ctx.beginPath();
        //draws gameboard
        for(let i=0; i<6; i++){
          for(let j=0; j<5; j++){
            ctx.rect(xcoord, ycoord, size, size);
            ctx.fillStyle = "#cccccc";
            ctx.fill();
            xcoord += xspace;
          }
          ycoord += yspace;
          xcoord = 400; 
        }
  ctx.closePath(); 
}