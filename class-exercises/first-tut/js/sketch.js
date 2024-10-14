


let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

// function preload() {
//     stinkImg = loadImage("images/stinky-lines.jpg")
// }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0, "fixed");
    // canvas.style("z-index", -2); //makes everything here move behind the content in the html 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    //easing 
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawMouse(xPos, yPos);
}

// function mouseMoved(){
//     drawThing(mouseX, mouseY); 
// }

function drawThing(){
    strokeWeight(0); //draws random green dots 
    fill(0, random(150, 255), random(50, 100));
    ellipse(_x, _y, 30, 30);

}

function drawMouse(_x, _y) {
    //stink lines 
    // image(stinkImg, _x-10, _y-50, 30, 30);
    
    //cursor mouse 
    fill(255);
    circle(_x - 20, _y - 15, 25, 25); //left outter ear
    circle(_x + 20, _y - 15, 25, 25); //right outter ear 
    fill(242, 179, 230);
    circle(_x - 20, _y - 15, 18, 18); //left inner ear
    circle(_x + 20, _y - 15, 18, 18); //right inner ear 
    fill(255);
    circle(_x, _y, 35, 35); //head  
    fill(0);
    circle(_x - 7, _y - 2, 10, 10); //left eye
    circle(_x + 7, _y - 2, 10, 10); //right eye
    fill(255);
    circle(_x, _y + 10, 20, 20); //muzzle
    fill(0);
    circle(_x, _y + 5, 10, 10); //nose 
}
