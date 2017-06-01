var canvas;
var bgImg;
var machines = [];
var person;

function preload() {
    machineImg = loadImage("images/atm-machine.jpg");
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
    person = new Person(482, 600);
    store1 = new Store1(10, 10);
    store2 = new Store2(327, 44);
    store3 = new Store3(500, 31);
    store4 = new Store4(663, 34);
}

//REFERENCE: https://p5js.org/reference/
function draw() {
    background(250, 235, 215);
    store1.show();
    store2.show();
    store3.show();
    store4.show();
    person.show();
    machines.forEach((m) => m.show());
    
    if (keyIsDown(LEFT_ARROW))  person.move(0);
    if (keyIsDown(UP_ARROW))    person.move(1);
    if (keyIsDown(RIGHT_ARROW)) person.move(2);
    if (keyIsDown(DOWN_ARROW))  person.move(3);

    machines.forEach( (m) => {
        if(person.collision(m)) {
            showModal('myModal', 'Information', 'LALALA');
            person.canMove = false;
            person.x = m.x + 16; // PARA QUE SE POSICIONE AL MEDIO DE LA MAQUINA
            person.y = m.y + 45;
        } else {
            person.canMove = true;

        }
    } )

}
