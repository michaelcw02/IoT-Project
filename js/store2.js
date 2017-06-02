function Store2(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 60, this.y + 55, 52, 65);

    this.show = () => {
        image(store2Img, this.x, this.y);
        this.door.show();
    }
}