function Store1(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 16, this.y + 83, 85, 75);
    this.qty = 0;

    this.show = () => {
        image(store1Img, this.x, this.y);
        image(store1Ad, this.x + 41, this.y + 5, 60, 60);
        this.door.show();
        fill(0, 0, 0);
        noStroke();
        text('WAREHOUSE', this.x + 110, this.y + 30);
    }

    this.warehouseMan = new WarehouseMan(0, 450);
    
    this.showInside = () => {
        image(store1Bg, 187,   0);
        image(store1BD, 231, 248, 290, 180);
        if (this.warehouseMan.x > 320 && this.warehouseMan.y < 290) {
            this.warehouseMan.init();
            this.qty += this.warehouseMan.qty;
        }
        this.warehouseMan.show();

        s = this.qty + ' iphones in total dispatched';
        textSize(24);
        fill(0,0,0);
        noStroke();
        text(s, 300, 250);

    }
}