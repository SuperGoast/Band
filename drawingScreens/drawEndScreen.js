function drawEndScreen(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    var color = 'white';
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = 'black'; 
    ctx.font = "80px Source Code Pro";
    ctx.fillText("END GAME", 700, 400);
    ctx.closePath();
}