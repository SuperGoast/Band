//draws first instructions page 
        //draws gameboard
        //green "#009900"
        // yellow "#ffcc00"
        //gray "#cccccc"
function drawInstructions(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    var colorList1 = ["#009900", "#cccccc", "#cccccc", "#cccccc", "#cccccc"];
    var colorList2 = ["#cccccc", "#ffcc00", "#cccccc", "#cccccc", "#cccccc"];
    var colorList3 = ["#cccccc", "#ffcc00", "#cccccc", "#cccccc", "#cccccc"];
    var yspaced = 90;
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
        xcoord += xspace ;
        ctx.font = "50px Courier";
        ctx.fillStyle = 'black';
        ctx.fillText(string.charAt(j),xcoord, 90+yspaced);
        ctx.closePath(); 
        }
        ctx.font = "50px Courier";
        ycoord += yspace;
        xcoord = 475; 
    }
    ctx.beginPath();
    ctx.font = "50px Courier";
    ctx.fillStyle = "#000000";
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
    ctx.fillText("Press 1 to start",xcoord+80, 550+yspaced);
    ctx.closePath(); 
    xcoord += 70;
}