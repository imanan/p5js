function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    var c=random(0,360);
    colorMode(HSB,360,100,100);
    fill(c,80,80);
    noStroke();
    ellipse(mouseX, mouseY, 80, 80);
}