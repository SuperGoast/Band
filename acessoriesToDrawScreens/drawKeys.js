function drawKeys(){
  ctx.beginPath();
  //Draws Keyboard
  var stringArray = "QWERTYUIOPASDFGHJKL ZXCVBNM ";
  var tempchar = "";
  xcoord = 500;
  xspace = 5;
  for(let i=0; i<28; i++){
    letter = stringArray.charAt(i);
    keyYSize = 40;
    yspace = 35 + keyYsize;
    if(i==0){
      ycoord = 495;
    }else if(i==10){
      xcoord = 512;
      ycoord += yspace ;
    }else if(i==19){
      letter = "<--"
      keyXSize = 50;
      ycoord += yspace;
      xspace = 55;
      xcoord = 505 - xspace;
    }else if(i==20){
      xcoord = 540;
    }else if(i==27){
      letter = "Enter";
      keyXSize = 60;
      xpace = 55;
      xcoord = 705 - xspace;
    }else{
      console.log("error");
    } 
    xspace = 5 + keyXSize;
    xcoord += xspace;
    ctx.rect(xcoord, ycoord, keyXSize, keyYSize);
    ctx.fillStyle = "#4d4d4d";
    ctx.fill();
    keyXSize = 20;
  }
  xcoord = 500;
  xspace = 5;
  for(let i=0; i<28; i++){
    //tempchar = string.charAt(i);
    letter = stringArray[i];
    keyYSize = 40;
    yspace = 35 + keyYsize;
    if(i==0){
      ycoord = 495;
    }else if(i==10){
      xcoord = 512;
      ycoord += yspace ;
    }else if(i==19){
      letter = "<--"
      keyXSize = 50;
      ycoord += yspace;
      xspace = 55;
      xcoord = 505 - xspace;
    }else if(i==20){
      xcoord = 540;
    }else if(i==27){
      letter = "Enter";
      keyXSize = 50;
      xpace = 55;
      xcoord = 715 - xspace;
    }else{
      console.log("error");
    } 
    xspace = 5 + keyXSize;
    xcoord += xspace;
    ctx.font = "16px Courier";
    ctx.fillStyle = "#ffffff";
    console.log("Letter "+letter+ " at (" + (xcoord + 5) + "," +(ycoord + parseInt(yspace/2))+ ")");
    ctx.fillText(letter,( xcoord + 5 ), (ycoord + parseInt(yspace/2)));
    keyXSize = 20;
  }
  ctx.closePath();
}