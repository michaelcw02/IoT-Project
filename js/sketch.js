var canvas;
var level;
var machines = [];
var person;
var stores = [];
var techImg;
//auxiliars
var doorX;
var doorY;
var isBroken = false;
var goBack   = false;
var isSeated = false;
var isLost = false;

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
    store2Bg    = loadImage("images/restaurant-interior.jpg");
    store3Bg    = loadImage("images/Supermarket-shelves.jpg");
    store4Bg    = loadImage("images/ckstoreinside.jpg");
    store4DR    = loadImage("images/dressingroom.jpg");
    exitDoorImg = loadImage("images/open-exit-door.png");
    techImg     = loadImage("images/technician.png");
    netTopology = loadImage("images/topologylogo.jpg");
}

function setup() {
    canvas = createCanvas(1000, 650);
    canvas.parent('sketch-holder');
    level = 0;
    machines.push(new Machine(200 - 32, 500));
    machines.push(new Machine(400 - 32, 500));
    machines.push(new Machine(600 - 32, 500));
    machines.push(new Machine(800 - 32, 500));
    stores.push(new Store1(10, 10));
    stores.push(new Store2(327, 44));
    stores.push(new Store3(500, 31));
    stores.push(new Store4(663, 34));
    person = new Person(482, 600);
    tech = new Technician(600, 200);
    topology = new Item('Topology', 0, 575, 150, 75, netTopology);
    kid = new Kid(475, 600);
    showModalRegister();


}

//REFERENCE: https://p5js.org/reference/
function draw() {
    background(250, 235, 215);
    // LEVEL 0 - MALL
    if (level === 0) {
        stores.forEach((s) => s.show());
        machines.forEach((m) => m.show());
        topology.show();
        kid.move();
        kid.show();
        machines.forEach((m) => {
            if (person.collision(m)) {
                showModalFingerPrint();
                person.canMove = false;
                person.x = m.x + 16; // PARA QUE SE POSICIONE AL MEDIO DE LA MAQUINA
                person.y = m.y + 45;
            } else {
                person.canMove = true;
            }
        });
        let distance = (dist(person.x, person.y, kid.x, kid.y) / 10).toFixed(1);
        if(distance > 20) {
            if(!isLost) {
                lostKid();
                isLost = true;
            }
            s = 'Your kid is ' + distance + ' meters away from you!';
            textSize(21);
            fill(0,0,0);
            text(s, 600, 620);
        } else if(isLost === true && distance < 2) {
            isLost = false;
            careKid();
        }
        stores.forEach((s) => {
            if (person.collision(s.door)) {
                doorX = (s.door.x + (s.door.w / 2));
                doorY = (s.door.y + s.door.h) + 20;
                if (s instanceof Store2) {
                    level = 2;
                    person.setPosition(150, 450);
                    wecomePizzaHut();
                    doorY = (s.door.y + s.door.h) + 30;
                } else if (s instanceof Store3) {
                    level = 3; //temp
                    person.setPosition(500, 600);
                    welcomeWalmart();
                } else if (s instanceof Store4) {
                    level = 4;
                    person.setPosition(482, 550);
                    welcomeCalvinKlein();
                } else {
                    showModal('myModal', 'Information', 'You are in a store');
                    person.canMove = false;
                    person.x = (s.door.x + (s.door.w / 2));
                    person.y = (s.door.y + s.door.h) + 20;
                }
            } else {
                person.canMove = true;
            }
        });
    }
    // LEVEL 2 - PIZZA HUT
    if (level === 2) {
        stores.forEach( (s) => {
            if(s instanceof Store2) {
                s.showInside();
                if(person.collision(s.doorInside)) {
                    level = 0;
                    productsBoughtPH();
                    isSeated = false;
                    person.setPosition(doorX, doorY);
                }
                s.items.forEach( (i) => {
                    if(person.collision(i)) {
                        if(!isSeated) {
                            justSeatedPH();
                            isSeated = true;
                        }
                    }
                } );

            }
        } )

    }
    // LEVEL 3 - WALMART
    if (level === 3) {
        if (person.y > 649) {
            productsBoughtWM();
            level = 0;
            person.setPosition(doorX, doorY);
        }
        stores.forEach((s) => {
            if (s instanceof Store3) {
                s.showInside();
                s.items.forEach((i) => {
                    if (person.collision(i)) {
                        confirmPurchase( () => {
                            i.qty--;
                            if(!isBroken) {
                                isBroken = addProductOnWalmart();
                            } else wmPurchases++;
                            if(i.qty == 2) {
                                showModal('firstModal', 'Warning!', '<h3>The sensors have detected that there are only ' + i.qty + ' of ' + i.name + ' left, we are notifying our suppliers to ship more</h3>');
                                i.qty += i.qty + 5;
                            }
                        }, i.qty, i.name );
                        person.canMove = false;
                        person.x = (i.x + (i.w / 2));
                        person.y = (i.y + i.h) + 20;
                    } else {
                        person.canMove = true;
                    }
                    if (isBroken) {
                        tech.canMove = true;
                        tech.move();
                        tech.show();
                    }
                })
            }
        })

    }
    // LEVEL 4 - CALVIN KLEIN
    if (level === 4) {
        if (person.y > 599) {
            productsBoughtCK();
            level = 0;
            person.setPosition(doorX, doorY);
        }
        stores.forEach((s) => {
            if (s instanceof Store4) {
                s.showInside();
                s.items.forEach((i) => {
                    if (person.collision(i)) {
                        confirmPurchase( () => {
                            i.qty--;
                            addProductOnCK();
                            if(i.qty == 2) {
                                showModal('firstModal', 'Warning!', '<h3>The sensors have detected that there are only ' + i.qty + ' of ' + i.name + ' left, we are notifying our suppliers to ship more</h3>');
                                i.qty += i.qty + 5;
                            }
                        }, i.qty, i.name );
                        person.canMove = false;
                        person.x = (i.x + (i.w / 2));
                        person.y = (i.y + i.h) + 20;
                    } else {
                        person.canMove = true;
                    }
                });
                if(person.collision(s.dressingRoom)) {
                    dressRoomCK();
                    intelligentMirror();
                    person.canMove = false;
                    person.x = s.dressingRoom.x + s.dressingRoom.w + 20;
                    person.y = s.dressingRoom.y + (s.dressingRoom.h / 2);
                } else {
                    person.canMove = true;
                }
            }
        })

    }

    person.show();


    if (keyIsDown(LEFT_ARROW)) person.move(0, level);
    if (keyIsDown(UP_ARROW)) person.move(1, level);
    if (keyIsDown(RIGHT_ARROW)) person.move(2, level);
    if (keyIsDown(DOWN_ARROW)) person.move(3, level);
}