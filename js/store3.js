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
    this.items.push( new Item('Honeybee Honey', 45, 350, 130, 47) );
    this.items.push( new Item('Don\'t know',    45, 400, 120, 47) );
    this.items.push( new Item('Honey Honeybee', 45, 450, 110, 47) );
    this.items.push( new Item('Sugar Sugar',    50, 520, 110, 47) );
    this.items.push( new Item('Fresh Milk',    820, 292, 130, 40) );
    this.items.push( new Item('Pepsi Cola',    812, 340, 140, 37) );
    this.items.push( new Item('Lime Juice',    845, 390, 110, 50) );

    this.showInside = () => {
        image(store3Bg, 0, 0, 1000, 850);
        image(store3Ad, 425, 0, 150, 140);
        image(exitDoorImg, 425, 610, 50, 50);
        this.items.forEach( (i) => i.show() );
    }
}