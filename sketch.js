let img;

let px = 100;
let py = 100;
let speed = 2;

function preload() {
    img = loadImage("Map.png");
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {
    background(0);
    image(img, 0, 0);
}
