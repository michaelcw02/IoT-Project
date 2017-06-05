function WarehouseMan(x, y) {
    this.initialX = x;
    this.initialY = y;
    this.x = this.initialX;
    this.y = this.initialY;
    this.speed = 1;
    this.qty = 12;

    this.show = () => {
        image(store1Cart, this.x, this.y, 150, 150);
        s = this.qty + ' iphones';
        textSize(12);
        fill(0,0,0);
        noStroke();
        text(s, this.x, this.y);
        this.x += this.speed + 1;
        this.y -= this.speed;
    }

    this.init = () => {
        this.x = this.initialX;
        this.y = this.initialY;
    }
}