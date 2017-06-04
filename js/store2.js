function Store2(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 60, this.y + 55, 52, 65);

    this.show = () => {
        image(store2Img, this.x, this.y);
        image(store2Ad, this.x + 55, this.y + 5, 50, 50);
        this.door.show();
    }

    this.doorInside = new Door(90, 300, 110, 110);
    this.items = [];
    this.items.push( new Item('Table~1', 310, 450, 160,  80) );
    this.items.push( new Item('Table~2', 433, 400, 160,  80) );
    this.items.push( new Item('Table~3', 468, 522, 160,  80) );
    this.items.push( new Item('Table~4', 591, 468, 160,  80) );
    this.items.push( new Item('Table~4', 710, 410, 160,  80) );

    this.showInside = () => {
        image(store2Bg, 0, 0, 1000, 750);
        this.doorInside.show();
        this.items.forEach( (i) => i.show() );
    }
}