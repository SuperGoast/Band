function drawResultsScreen(){
    var homeBtn = document.createElement("button");
    homeBtn.style.width = '200px'; // setting the width to 200px
    homeBtn.style.height = '50px';
    homeBtn.style.position = "absolute";
    homeBtn.style.left = "55%";
    homeBtn.innerHTML = "Replay";
    var body = document.getElementsByTagName("body")[0];
      body.appendChild(homeBtn);
      homeBtn.addEventListener ("click", function() {
        replayClick();
      });
      var replayBtn = document.createElement("button");
      replayBtn.style.width = '200px'; // setting the width to 200px
      replayBtn.style.height = '50px';
      replayBtn.style.position = "absolute";
      replayBtn.style.left = "35%";
      replayBtn.innerHTML = "home";
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(replayBtn);
      replayBtn.addEventListener ("click", function() {
        homeClick();
      });
    var yspaced = 90;
    var highScore = 120;
    var leader1 = "asd";
    var leader2 = "asd";
    var leader3 = "asd";
    var leader4 = "asd";
    var leader5 = "asd";
    xcoord = 575;
    if(score>highScore){
        var highScoreText = "New High Score";
    }else{
        var highScoreText = "";
    }
    ctx.beginPath();
        let img = document.createElement("img");
        img.onload = start;  
        img.src = "background.jpeg";
        ctx.font = "50px Courier";
        ctx.fillStyle = "#000000";
        ctx.fillText("End of Game",575, yspaced-20);
        ctx.font = "36px Courier";
        ctx.fillText("Your Score",xcoord+50, 30 + yspaced);
        ctx.fillText(score + " " +highScoreText,xcoord+120, 60+ yspaced);
        ctx.fillText("Leader Board",xcoord+30, 90 + yspaced);
        ctx.font = "24px Courier";
        ctx.fillText("1."+leader1,xcoord, 120+yspaced);
        ctx.fillText("2."+leader2,xcoord, 154+yspaced);
        ctx.fillText("3."+leader3,xcoord, 188+yspaced);
        ctx.fillText("4."+leader4,xcoord, 222+yspaced);
        ctx.fillText("5."+leader5,xcoord, 256+yspaced);
    ctx.closePath(); 
    
}