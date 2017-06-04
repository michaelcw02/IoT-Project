function Store2(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 60, this.y + 55, 52, 65);

    this.show = () => {
        image(store2Img, this.x, this.y);
        image(store2Ad, this.x + 55, this.y + 5, 50, 50);
        this.door.show();
    }

    this.showInside = () => {
        image(store2Bg, 0, 0, 1000, 750);
    }
}