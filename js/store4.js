function Store4(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 120, this.y + 68, 85, 67);

    this.show = () => {
        image(store4Img, this.x, this.y);
        image(store4Ad, this.x + 125, this.y - 5, 70, 70);
        this.door.show();
    }
    
    //indoor part
    this.items = [];
    this.items.push( new Item('shirts', 230, 230, 260,  80) );
    this.items.push( new Item('dress',  520, 260,  70, 105) );
    this.items.push( new Item('pant',   580, 260,  70, 100) );
    this.items.push( new Item('shirt',  620, 260,  70,  65) );
    this.items.push( new Item('pant',   680, 260,  70, 100) );
    this.items.push( new Item('hats',   270, 430, 200,  50) );
    this.items.push( new Item('shoes',  525, 480, 220,  50) );

    this.showInside = () => {
        image(exitDoorImg, 310, 580);
        this.items.forEach( (i) => i.show() );
    }
}