var canvas;
var bgImg;
var machines = [];
var person;
var stores = [];

function preload() {
    machineImg= loadImage("images/atm-machine.jpg");
    store1Img = loadImage("images/store3.jpg");
    store2Img = loadImage("images/store5.jpg");
    store3Img = loadImage("images/store4.jpg");
    store4Img = loadImage("images/store6.jpg");
}

function setup() {
    canvas = createCanvas(1000, 650);
    canvas.parent('sketch-holder');
    machines.push(new Machine(200-32, 500));
    machines.push(new Machine(400-32, 500));
    machines.push(new Machine(600-32, 500));
    machines.push(new Machine(800-32, 500));
    stores.push(new Store1(10, 10));
    stores.push(new Store2(327, 44));
    stores.push(new Store3(500, 31));
    stores.push(new Store4(663, 34));
    person = new Person(482, 600);
}

//REFERENCE: https://p5js.org/reference/
function draw() {
    background(250, 235, 215);
    stores.forEach( (s) => s.show() );
    machines.forEach((m) => m.show());
    person.show();
    
    if (keyIsDown(LEFT_ARROW))  person.move(0);
    if (keyIsDown(UP_ARROW))    person.move(1);
    if (keyIsDown(RIGHT_ARROW)) person.move(2);
    if (keyIsDown(DOWN_ARROW))  person.move(3);

    machines.forEach( (m) => {
        if(person.collision(m)) {
            showModal('myModal', 'Information', 'You are in a machine');
            person.canMove = false;
            person.x = m.x + 16; // PARA QUE SE POSICIONE AL MEDIO DE LA MAQUINA
            person.y = m.y + 45;
        } else {
            person.canMove = true;
        }
    } );
    
    stores.forEach( (s) => {
        if(person.collision(s.door)) {
            showModal('myModal', 'Information', 'You are in a store');
            person.canMove = false;
            person.x = (s.door.x + (s.door.w / 2));
            person.y = (s.door.y +  s.door.h) + 20;
        } else {
            person.canMove = true;
        }
    } );

}