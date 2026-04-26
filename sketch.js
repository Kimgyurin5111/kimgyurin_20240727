let img;

let px = 100;
let py = 768;
let speed = 5;

let beans = [];
let score = 0;
let beanSize = 20;
let beanSpacing = 100;

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

function isPath(x, y) {
    let c = img.get(x, y);

    let r = c[0];
    let g = c[1];
    let b = c[2];

    return b >= 55 && b <= 75 && g < 15;
}

function generateBeans() {
    beans = [];
    for (let x = beanSpacing / 2; x < img.width; x += beanSpacing) {
        for (let y = beanSpacing / 2; y < img.height; y += beanSpacing) {
            if (isPath(x, y)) {
                beans.push({ x: x, y: y, eaten: false });
            }
        }
    }
}

function movePacman() {
    let nx = px;
    let ny = py;

    if (keyIsDown(LEFT_ARROW)) nx -= speed;
    if (keyIsDown(RIGHT_ARROW)) nx += speed;
    if (keyIsDown(UP_ARROW)) ny -= speed;
    if (keyIsDown(DOWN_ARROW)) ny += speed;

    let r = 28;

    // check wall
    if (
        !isWall(nx, ny) &&
        !isWall(nx - r, ny) &&
        !isWall(nx + r, ny) &&
        !isWall(nx, ny - r) &&
        !isWall(nx, ny + r)
    ) {
        px = nx;
        py = ny;
    }
}

function drawPacman() {
    fill(255, 255, 0);
    ellipse(px, py, 60, 60);
}

function drawBeans() {
    fill(255, 220, 150);
    noStroke();
    for (let b of beans) {
        if (!b.eaten) {
            ellipse(b.x, b.y, beanSize, beanSize);
        }
    }
}

function drawScore() {
    fill(255);
    noStroke();
    textSize(70);
    textAlign(LEFT, TOP);
    text("Score: " + score, 10, 10);
}

function eatBeans() {
    for (let b of beans) {
        if (!b.eaten) {
            let d = dist(px, py, b.x, b.y);
            if (d < 20) {
                //반지름 내 들어오면 -> 먹기
                b.eaten = true;
                score++;
            }
        }
    }
}
function mousePressed() {
    let c = img.get(mouseX, mouseY);
    console.log("클릭 위치 RGB:", c[0], c[1], c[2]);
}
