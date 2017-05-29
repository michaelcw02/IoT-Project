var canvas;
var bgImg;
var machines = [];
var person;

function preload() {
    machineImg = loadImage("images/pc-01.jpg");
}

function setup() {
    canvas = createCanvas(1200, 800);
    machines.push(new Machine(500, 550));
    machines.push(new Machine(500, 625));
    machines.push(new Machine(500, 700));
    machines.push(new Machine(700, 550));
    machines.push(new Machine(700, 625));
    machines.push(new Machine(700, 700));
    person = new Person(610, 750);
}
//REFERENCE: https://p5js.org/reference/
//colors:
//background(rgb); para el fondo
//stroke(rgb); para los bordes
//fill(rgb); para rellenar
function draw() {
    background(250, 235, 215);
    machines.forEach((m) => m.show());
    if (keyIsDown(LEFT_ARROW))
        person.move(0);
    if (keyIsDown(UP_ARROW))
        person.move(1);
    if (keyIsDown(RIGHT_ARROW))
        person.move(2);
    if (keyIsDown(DOWN_ARROW))
        person.move(3);
    person.show();
}
