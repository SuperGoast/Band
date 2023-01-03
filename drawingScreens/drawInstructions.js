//draws first instructions page 
        //draws gameboard
        //green "#009900"
        // yellow "#ffcc00"
        //gray "#cccccc"
//for style go with a spy theme 'decoding the message' and make everything balck and white. Also
//add screen reader stuff (and maybe easier mode) for accesibility. maybe spys katy and miley
//easy medium and hard would be easy to implement with 4 letters 5 letters & 6 letters. 
function drawInstructions(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
        ctx.rect(0, 0, c.width, c.height);
        var color = 'white';
        ctx.fillStyle = color;
        ctx.fill();
    ctx.closePath();
     var freePlayBtn = document.createElement("button");
      freePlayBtn.style.width = '200px'; // setting the width to 200px
      freePlayBtn.style.height = '50px';
      freePlayBtn.style.position = "absolute";
      freePlayBtn.style.left = "55%";
      freePlayBtn.innerHTML = "Free Play";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(freePlayBtn);
      var startBtn = document.createElement("button");
      startdth = '200px'; // setting the width to 200px
      startBtn.style.height = '50px';
      startBtn.style.position = "absolute";
      startBtn.style.left = "35%";
      startBtn.innerHTML = "start";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(startBtn);
      startBtn.addEventListener ("click", function() {
        startClick();
      });
      freePlayBtn.addEventListener ("click", function() {
        freePlayClick();
      });
    //drawing rectangles 
    var colorList1 = ["#009900", "#cccccc", "#cccccc", "#cccccc", "#cccccc"];
    var colorList2 = ["#cccccc", "#ffcc00", "#cccccc", "#cccccc", "#cccccc"];
    var colorList3 = ["#cccccc", "#ffcc00", "#cccccc", "#cccccc", "#cccccc"];
    var yspaced = 50;
    var listOExamples = ["WEARY", "PILLS", "VAGUE"];
    for(let i=0; i<3; i++){
        var string = listOExamples[i];
        xcoord = 475;
        if(i==0){
            colorList = colorList1;
            ycoord = 188 +yspaced;
        }else if(i==1){
            colorList = colorList2;
            ycoord = 302+yspaced;
        }else if(i==2){
            colorList = colorList3;
            ycoord = 416+yspaced;
        }
        for(let j=0; j<5; j++){
        ctx.beginPath();
        ctx.rect(xcoord, ycoord, size, size);
        var color = colorList[j];
        ctx.fillStyle = color;
        ctx.fill();
        ctx.font = "50px Courier";
        ctx.fillStyle = 'black';
        ctx.fillText(string.charAt(j),xcoord+15, ycoord+45);
        xcoord += xspace ;
        ctx.closePath(); 
        }
        ycoord += yspace;
        xcoord = 475; 
    }
    yspaced = 100
    //drawing text
    ctx.beginPath();
    ctx.font = "50px Courier";
    ctx.fillStyle = "#000000";
    ctx.fillText("Decode the message",575, yspaced-70);
    ctx.fillText("How to Play",575, yspaced-20);
    ctx.font = "36px Courier";
    ctx.fillText("Guess the Word in 6 tries",xcoord, 30 + yspaced);
    ctx.fillText("Examples",xcoord, 60+ yspaced);
    ctx.font = "24px Courier";
    ctx.fillText("-Each guess must be a valid 5 letter word",xcoord, 90+yspaced);
    ctx.fillText("-The color of the tiles will change to show ",xcoord, 124+yspaced);
    ctx.fillText("how close the guess was to the word",xcoord+15, 158+yspaced);
    ctx.fillText("M is in the word in the correct spot",xcoord, 272+yspaced);
    ctx.fillText("F is in the word not in the correct spot",xcoord, 386+yspaced);
    ctx.fillText("W is not in the word in any spot",xcoord, 500+yspaced);
    ctx.fillText("Use the keyboard to type your answer",xcoord+50, 550+yspaced);
    ctx.fillText("To start the game pick a gamemode",xcoord+70, 574+yspaced);
    ctx.closePath(); 
}