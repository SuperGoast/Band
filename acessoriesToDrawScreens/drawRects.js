function drawRects(color1, color2, color3, color4, color5, rows, border, row){
  ctx.beginPath();
    //draws gameboard
    colorList = [color1, color2, color3, color4, color5]
    ycoord = 50 + (yspace*row);
    for(let i=0; i<rows; i++){
      xcoord = 475; 
      for(let j=0; j<chosenWord.length; j++){
        ctx.beginPath();
        ctx.rect(xcoord, ycoord, size, size);
        var color = colorList[j];
        ctx.fillStyle = color;
        if(border){
          ctx.strokeStyle="rgba(0,0,0,1)";
          ctx.strokeRect(xcoord, ycoord, size, size);
        }
        ctx.fill();
        xcoord += xspace ;
        ctx.closePath(); 
      }
      ycoord += yspace;
      xcoord = 475; 
    }
}