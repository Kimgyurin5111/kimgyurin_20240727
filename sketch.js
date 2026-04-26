let img;

let px = 100;
let py = 768;
let speed = 5;

let beans = [];
let score = 0;
let beanSize = 20;
let beanSpacing = 90;

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

    drawMap();

    movePacman();
    drawPacman();
    drawBeans();
    drawScore();
    eatBeans();
}
function drawMap() {
    // fill(27, 139, 175);
    fill(255, 0, 0);
    //입구
    rect(0, 692, 563, 10);
    rect(0, 716, 563, 10);
    rect(0, 810, 563, 10);
    rect(0, 835, 563, 10);

    rect(376 + 187, 506, 10, 220);
    rect(376 + 187, 810, 10, 198);
    rect(2244, 506, 10, 220);
    rect(2244, 810, 10, 198);

    //출구
    rect(2253, 692, 563, 10);
    rect(2253, 716, 563, 10);
    rect(2253, 810, 563, 10);
    rect(2253, 835, 563, 10);

    //위 테두리
    rect(364, 52, 2088, 10);
    rect(376, 71, 997, 10);
    rect(1443, 71, 999, 10);
    rect(352, 62, 12, 10);
    rect(2452, 62, 12, 10);

    //중간
    rect(1373, 81, 10, 182);
    rect(1433, 81, 10, 182);
    rect(1373, 263, 70, 10);

    //아래 테두리
    rect(387, 1478, 2042, 10);
    rect(422, 1455, 1973, 10);

    //왼쪽 가로 테두리(위)
    rect(376, 506, 187, 10);
    rect(352, 530, 210, 10);

    //왼쪽 가로 테두리(아래)
    rect(387, 975, 176, 10);
    rect(422, 998, 141, 10);

    //왼쪽 세로 테두리(위)
    rect(342, 72, 10, 458);
    rect(366, 81, 10, 425);

    //왼쪽 세로 테두리(아래)
    rect(377, 985, 10, 493);
    rect(412, 1008, 10, 447);

    //오른쪽 가로 테두리(위)
    rect(2254, 506, 187, 10);
    rect(2254, 530, 210, 10);

    //오른쪽 가로 테두리(아래)
    rect(2254, 975, 176, 10);
    rect(2254, 998, 141, 10);

    //오른쪽 세로 테두리(위)
    rect(2464, 72, 10, 458);
    rect(2442, 81, 10, 425);

    //오른쪽 세로 테두리(아래)
    rect(2430, 985, 10, 493);
    rect(2395, 1008, 10, 447);
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
    console.log(mouseX, mouseY);
}
