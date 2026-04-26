let img;

let px = 100;
let py = 768;
let speed = 5;

let beans = [];
let score = 0;
let beanSize = 6;
let beanSpacing = 24;

function preload() {
    img = loadImage("Map.png");
}

function setup() {
    createCanvas(img.width, img.height);
    generateBeans();
}

function draw() {
    background(0);
    image(img, 0, 0);

    movePacman();
    drawPacman();
    drawBeans();
    drawScore();
    eatBeans();
}
function isWall(x, y) {
    let c = img.get(x, y);

    let r = c[0];
    let g = c[1];
    let b = c[2];

    if (b > 100 && g > 100) {
        return true;
    }

    return false;
}

function generateBeans() {
    beans = [];
}

function movePacman() {
    let nx = px;
    let ny = py;

    if (keyIsDown(LEFT_ARROW)) nx -= speed;
    if (keyIsDown(RIGHT_ARROW)) nx += speed;
    if (keyIsDown(UP_ARROW)) ny -= speed;
    if (keyIsDown(DOWN_ARROW)) ny += speed;

    // check wall
    if (!isWall(nx, ny)) {
        px = nx;
        py = ny;
    }
}

function drawPacman() {
    fill(255, 255, 0);
    ellipse(px, py, 60, 60);
}

function drawBeans() {}

function drawScore() {
    fill(255);
    noStroke();
    textSize(20);
    textAlign(LEFT, TOP);
    text("Score: " + score, 10, 10);
}
