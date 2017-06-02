function Store3(x, y) {
    this.x = x;
    this.y = y;
    this.door = new Door(this.x + 41, this.y + 70, 73, 67);

    this.show = () => {
        image(store3Img, this.x, this.y);
        this.door.show();
    }
}