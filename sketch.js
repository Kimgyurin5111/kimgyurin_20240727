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

    drawOutLeftMap();
    drawOutRightMap();
    drawInMap();

    movePacman();
    drawPacman();
    drawBeans();
    drawScore();
    eatBeans();
}
function drawOutLeftMap() {
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
    rect(352, 530, 212, 10);

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
function drawOutRightMap() {
    fill(255, 0, 0);

    rect(2205, 167, 141, 10);
    rect(2205, 263, 141, 10);
    rect(2346, 177, 10, 96);
    rect(2195, 177, 10, 96);

    rect(2205, 365, 141, 10);
    rect(2205, 411, 141, 10);
    rect(2346, 375, 10, 46);
    rect(2195, 375, 10, 46);

    rect(1535, 167, 551, 10);
    rect(1535, 263, 551, 10);
    rect(2086, 177, 10, 96);
    rect(1526, 177, 10, 96);

    rect(1854, 365, 270, 10);
    rect(1854, 411, 201, 10);
    rect(2124, 375, 10, 188);
    rect(1844, 375, 10, 46);
    rect(2054, 563, 80, 10);
    rect(2054, 421, 10, 148);

    rect(1748, 517, 210, 10);
    rect(1526, 517, 152, 10);
    rect(1526, 517, 10, 50);

    rect(1738, 364, 10, 153);
    rect(1678, 364, 10, 153);
    rect(1738, 574, 10, 152);
    rect(1678, 574, 10, 152);
    rect(1688, 354, 50, 10);
    rect(1688, 716, 50, 10);
    rect(1948, 517, 10, 50);


}
function drawInMap() {
    // fill(27, 139, 175);
    fill(255, 0, 0);

    rect(470, 167, 141, 10);
    rect(470, 263, 141, 10);
    rect(460, 177, 10, 96);
    rect(611, 177, 10, 96);

    rect(470, 365, 141, 10);
    rect(470, 411, 141, 10);
    rect(460, 375, 10, 46);
    rect(611, 375, 10, 46);

    rect(740, 167, 541, 10);
    rect(740, 263, 541, 10);
    rect(730, 177, 10, 96);
    rect(1280, 177, 10, 96);

    rect(692, 365, 270, 10);
    rect(762, 411, 201, 10);
    rect(682, 375, 10, 188);
    rect(692 + 270, 375, 10, 46);
    rect(682, 375 + 188, 80, 10);
    rect(752, 421, 10, 148);
    //
    rect(858, 517, 210, 10);
    rect(1138, 517, 152, 10);
    rect(858, 564, 210, 10);
    rect(1138, 564, 152, 10);
    rect(858, 517, 10, 50);
    rect(1280, 517, 10, 50);

    rect(1068, 364, 10, 153);
    rect(1128, 364, 10, 153);
    rect(1068, 574, 10, 152);
    rect(1128, 574, 10, 152);
    rect(1078, 354, 50, 10);
    rect(1078, 716, 50, 10);

    //
    rect(752, 658, 222, 10);
    rect(752, 857, 222, 10);
    rect(752, 658, 10, 200);
    rect(916, 658, 10, 200);
    rect(964, 658, 10, 200);

    //
    rect(670, 951, 300, 10);
    rect(670, 998, 300, 10);
    rect(670, 951, 10, 50);
    rect(963, 951, 10, 57);

    //
    rect(1068, 810, 10, 198);
    rect(1128, 810, 10, 198);
    rect(1078, 810, 50, 10);
    rect(1078, 998, 50, 10);

    //
    rect(517, 1092, 10, 170);
    rect(564, 1092, 10, 170);
    rect(517, 1092, 50, 10);
    rect(517, 1256, 57, 10);

    //
    rect(928, 1091, 360, 10);
    rect(928, 1127, 360, 10);
    rect(928, 1091, 10, 46);
    rect(1280, 1091, 10, 46);

    //
    rect(835, 1210, 138, 10);
    rect(835, 1256, 138, 10);
    rect(835, 1210, 10, 50);
    rect(963, 1210, 10, 50);

    //
    rect(670, 1092, 160, 10);
    rect(670, 1092, 10, 233);
    rect(822, 1092, 10, 45);
    rect(763, 1127, 60, 10);
    rect(753, 1137, 10, 188);
    rect(775, 1137, 10, 188);
    rect(763, 1325, 10, 40);
    rect(517, 1325, 10, 40);
    rect(1280, 1325, 10, 40);
    rect(517, 1325, 153, 10);
    rect(764, 1325, 303, 10);
    rect(1138, 1325, 150, 10);
    rect(1068, 1209, 10, 116);
    rect(1128, 1209, 10, 116);
    rect(1068, 1209, 60, 10);
    rect(517, 1356, 773, 10);
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
