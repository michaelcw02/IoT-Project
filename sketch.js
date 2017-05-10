var canvas;

function preload() {

}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
}
//REFERENCE: https://p5js.org/reference/
//colors:
    //background(rgb); para el fondo
    //stroke(rgb); para los bordes
    //fill(rgb); para rellenar
function draw() {
    background(102, 158, 136);

    ellipseMode(CENTER);
    rectMode(CENTER);

    fill(100, 200, 0);
    ellipse(window.innerWidth/2, window.innerHeight/2, 100, 100);

}

window.onresize = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
};