var canvas;
var level;
var machines = [];
var person;
var stores = [];

//auxiliars
var doorX;
var doorY;


function getPerson() {
    return person;
}

function preload() {
    machineImg  = loadImage("images/atm-machine.jpg");
    store1Img   = loadImage("images/store3.jpg");
    store2Img   = loadImage("images/store5.jpg");
    store3Img   = loadImage("images/store4.jpg");
    store4Img   = loadImage("images/store6.jpg");
    store1Ad    = loadImage("images/apple.png");
    store2Ad    = loadImage("images/pizzaHut.png");
    store3Ad    = loadImage("images/supermarket.jpg");
    store4Ad    = loadImage("images/calvin-klein.svg");
    store3Bg    = loadImage("images/Supermarket-shelves.jpg")
    store4Bg    = loadImage("images/ckstoreinside.jpg");
    exitDoorImg = loadImage("images/open-exit-door.png");
}

function setup() {
    canvas = createCanvas(1000, 650);
    canvas.parent('sketch-holder');
    level = 0;
    machines.push(new Machine(200-32, 500));
    machines.push(new Machine(400-32, 500));
    machines.push(new Machine(600-32, 500));
    machines.push(new Machine(800-32, 500));
    stores.push(new Store1(10, 10));
    stores.push(new Store2(327, 44));
    stores.push(new Store3(500, 31));
    stores.push(new Store4(663, 34));
    person = new Person(482, 600);
    showModalRegister();
}

//REFERENCE: https://p5js.org/reference/
function draw() {
    background(250, 235, 215);
    // LEVEL 0 - MALL
    if(level === 0) {
        stores.forEach((s) => s.show());
        machines.forEach((m) => m.show());
        machines.forEach( (m) => {
            if(person.collision(m)) {
                showModalFingerPrint();
                person.canMove = false;
                person.x = m.x + 16; // PARA QUE SE POSICIONE AL MEDIO DE LA MAQUINA
                person.y = m.y + 45;
            } else {
                person.canMove = true;
            }
        } );
        
        stores.forEach( (s) => {
            if(person.collision(s.door)) {
                if(s instanceof Store4) {
                    level = 4;
                    person.setPosition(482, 550);
                    welcomeCalvinKlein();
                    doorX = (s.door.x + (s.door.w / 2));
                    doorY = (s.door.y +  s.door.h) + 20;
                } else if (s instanceof Store3) {
                    level = 3;  //temp
                    person.setPosition(500, 600);
                    //welcomeWalmart();
                    doorX = (s.door.x + (s.door.w / 2));
                    doorY = (s.door.y +  s.door.h) + 20;
                } else {
                    showModal('myModal', 'Information', 'You are in a store');
                    person.canMove = false;
                    person.x = (s.door.x + (s.door.w / 2));
                    person.y = (s.door.y +  s.door.h) + 20;
                }
            } else {
                person.canMove = true;
            }
        } );
    }
    // LEVEL 3 - WALMART
    if (level === 3) {
        if(person.y > 649) {
            level = 0;
            person.setPosition(doorX, doorY);
        }
        stores.forEach( (s) => {
            if( s instanceof Store3) {
                s.showInside();
                s.items.forEach( (i) => {
                    if(person.collision(i)) {
                        showModal('myModal', 'Information', 'You just bought a ' + i.name);
                        person.canMove = false;
                        person.x = (i.x + (i.w / 2));
                        person.y = (i.y + i.h) + 20;
                    } else {
                        person.canMove = true;
                    }
                })
            }
        })

    }
    // LEVEL 4 - CALVIN KLEIN
    if (level === 4) {
        if(person.y > 599) {
            level = 0;
            person.setPosition(doorX, doorY);
        }
        stores.forEach( (s) => {
            if(s instanceof Store4) {
                s.showInside();
                s.items.forEach( (i) => {
                    if(person.collision(i)) {
                        showModal('myModal', 'Information', 'You just bought a ' + i.name);
                        person.canMove = false;
                        person.x = (i.x + (i.w / 2));
                        person.y = (i.y + i.h) + 20;
                    } else {
                        person.canMove = true;
                    }
                })
            }
        } )

    }
    
    person.show();
    

    if (keyIsDown(LEFT_ARROW))  person.move(0, level);
    if (keyIsDown(UP_ARROW))    person.move(1, level);
    if (keyIsDown(RIGHT_ARROW)) person.move(2, level);
    if (keyIsDown(DOWN_ARROW))  person.move(3, level);
}