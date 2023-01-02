function drawResultsScreen(){
    var yspaced = 90;
    var highScore = 120;
    var leader1 = "asd";
    var leader2 = "asd";
    var leader3 = "asd";
    var leader4 = "asd";
    var leader5 = "asd";
    xcoord = 575;
    ctx.beginPath();
        ctx.rect(0, 0, 1400, 800);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.font = "50px Courier";
        ctx.fillStyle = "#000000";
        ctx.fillText("End of Game",575, yspaced-20);
        ctx.font = "36px Courier";
        ctx.fillText("Your Score",xcoord+50, 30 + yspaced);
        ctx.fillText(highScore,xcoord+120, 60+ yspaced);
        ctx.fillText("Leader Board",xcoord+30, 90 + yspaced);
        ctx.font = "24px Courier";
        ctx.fillText("1."+leader1,xcoord, 120+yspaced);
        ctx.fillText("2."+leader2,xcoord, 154+yspaced);
        ctx.fillText("3."+leader3,xcoord, 188+yspaced);
        ctx.fillText("4."+leader4,xcoord, 222+yspaced);
        ctx.fillText("5."+leader5,xcoord, 256+yspaced);
    ctx.closePath(); 
}