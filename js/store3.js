function Store3(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 41, this.y + 70, 73, 67);

    this.show = () => {
        image(store3Img, this.x, this.y);
        image(store3Ad, this.x + 43, this.y, 70, 70);
        this.door.show();
    }
    //indoor part
    this.items = [];
    this.items.push( new Item('Orange Juice',   45, 288, 142, 47) );
    this.items.push( new Item('Yougurt',       187, 285,  70, 47) );
    this.items.push( new Item('Blue Thing',    256, 280,  70, 47) );
    this.items.push( new Item('Honey Honeybee', 50, 455, 100, 43) );
    this.items.push( new Item('Fresh Milk',    760, 292,  60, 40) );
    this.items.push( new Item('Pepsi Cola',    812, 340, 140, 37) );

    this.refrigerator = new Item('Refrigerator', 0, 230, 410, 400);

    this.showInside = () => {
        image(store3Bg, 0, 0, 1000, 850);
        image(store3Ad, 425, 0, 150, 140);
        image(exitDoorImg, 425, 610, 50, 50);
        this.items.forEach( (i) => i.show() );
        this.refrigerator.show();
    }
}