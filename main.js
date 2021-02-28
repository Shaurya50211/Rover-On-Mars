var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
NasaImagesArray = ["nasa_mars_1.jpg", "Nasa_mars_2.jpg", "Nasa_mars_3.jpg", "nasa_mars_4 (2).jpg"];
var RandomNumber = Math.floor(Math.random() * 4);

var backgroundImg = NasaImagesArray[RandomNumber];
console.log(RandomNumber);
console.log("Background Image = " + backgroundImg);
roverImg = "rover.png";

roverX = 10;
roverY = 10;
roverW = 100;
roverH = 90;

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBg;
    backgroundImageTag.src = backgroundImg;

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImg;
}

function uploadBg() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverW, roverH);
}



window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
}

function up() {
    if (roverY > 0) {
        roverY -= 15;
        console.log("When Up arrow is pressed " + "X = " + roverX + " and " + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function down() {
    if (roverY < 500) {
        roverY += 15;
        console.log("When Down arrow is pressed " + "X = " + roverX + " and " + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function left() {
    if (roverX >= 0) {
        roverX -= 15;
        console.log("When Left arrow is pressed " + "X = " + roverX + " and " + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function right() {
    if (roverX <= 700) {
        roverX += 15;
        console.log("When Right arrow is pressed " + "X = " + roverX + " and " + "Y = " + roverY);
        uploadBg();
        uploadRover();
    }
}