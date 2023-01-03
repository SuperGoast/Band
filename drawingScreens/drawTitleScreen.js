function drawTitleScreen(){
ctx.beginPath();
    let img = document.createElement("img");
    img.onload = start;  
    img.src = "red.jpeg";
ctx.closePath();
    var introBtn = document.createElement("button");
    introBtn.style.width = '200px'; // setting the width to 200px
    introBtn.style.height = '50px';
    introBtn.style.position = "absolute";
    introBtn.style.left = "55%";
    introBtn.innerHTML = "To Instructions";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(introBtn);
    introBtn.addEventListener ("click", function() {
        introClick();
     });
    var startBtn = document.createElement("button");
    startdth = '200px'; // setting the width to 200px
    startBtn.style.height = '50px';
    startBtn.style.position = "absolute";
    startBtn.style.left = "35%";
    startBtn.innerHTML = "Start";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(startBtn);
    startBtn.addEventListener ("click", function() {
        startClick();
    });
}